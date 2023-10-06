import { AppBar, IconButton, Toolbar, Stack, Button, Typography } from "@mui/material"
import Navbar from "./Navbar"
import QuocHuy from "src/assets/images/QuocHuy.png"
import { useNavigate } from "react-router-dom"

const Bar = () => {
    const navigate = useNavigate()
    const handleClickLogo = () => {
        navigate("/")
    }
    return (
        <Toolbar
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div className="flex justify-left items-center" 
                onClick={handleClickLogo}
            >
                <IconButton size="large" aria-label="logo">
                    <img src={QuocHuy} alt="QuocHuy" style={{ width: 50, height: 50 }} />
                </IconButton>
                <Typography sx={{
                    cursor: "pointer",
                }}>
                    ISTORAGE - Cổng thông tin khai thác
                </Typography>
            </div>

            <Stack direction="row" spacing={2}>
                <Button color="inherit">Giỏ tài liệu</Button>
                <Button color="inherit">Thông báo</Button>
                <Button color="inherit">Đăng nhập</Button>
            </Stack>
        </Toolbar>
    )
}
const Header = () => {
    return (
        <AppBar sx={{
            position: "fixed",
            backgroundColor: "transparent",
        }}>
            <Bar />
            <Navbar />
        </AppBar>
    )
}

export default Header
