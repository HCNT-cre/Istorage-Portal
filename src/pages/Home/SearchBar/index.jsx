import { InputAdornment, TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentSearchType, setCurrentSearchType] = useState("title");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = (type) => {
        setCurrentSearchType(type);
    }

    return (
        <div >
            <div className="flex items-left">
                <Button
                    sx={{
                        fontSize: "10px",
                        background: `${currentSearchType === "title" ? "#1876d2" : "#ccc"}`,
                        color: "#fff",
                        borderRadius: "0px",
                        "&:hover": {
                            background: "#000",
                            color: "#fff",
                        },
                    }}
                    onClick={() => handleClick("title")}
                >Tìm kiếm theo tiêu đề hồ sơ</Button>
                <Button
                    sx={{
                        fontSize: "10px",
                        background: `${currentSearchType === "content" ? "#1876d2" : "#ccc"}`,
                        color: "#fff",  
                        borderRadius: "0px",
                        "&:hover": {
                            background: "#000",
                            color: "#fff",
                        },
                    }}
                    onClick={() => handleClick("content")}
                >Tìm kiếm theo nội dung văn bản</Button>
            </div>
            <TextField
                id="search"
                type="search"
                label="Nhập từ khoá"
                value={searchTerm}
                onChange={handleChange}
                InputLabelProps={{ shrink: false }}
                sx={{
                    width: 600,
                    marginTop: "10px",
                   
                }}
                InputProps={{
                    style: {
                        borderRadius: "0px",
                        background: "#fff",
                    },
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}

export default SearchBar 
