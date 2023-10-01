/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Table } from "src/components/Table";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input } from "antd";
import { FIELDS_TABLE_SEARCH_FILE } from "src/storage/FileStorage";
import { useNavigate, useLocation } from "react-router-dom";
import FileAPIService from "src/service/api/FileAPIService";



const FileSearch = ({
    showTable = true
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('search');
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [stateCheckBox, setStateCheckBox] = useState([]);
    const [search, setSearch] = useState({});

    const handleClickViewFile = (id) => {
        navigate(`/ho-so/${id}`);
    }

    const getFileFromResponse = (response) => {
        let filesArray = [];
        for (const rawData of response) {
            const row = {};
            row.id = rawData.id;
            for (const field of FIELDS_TABLE_SEARCH_FILE) {
                const { key } = field;
                if (key === "borrow") {
                    row.borrow = (
                        <p className="cursor-pointer text-blue-500 italic underline">Mượn</p>
                    );
                }
                else row[key] = (
                    <p  className="cursor-pointer" onClick={() => handleClickViewFile(rawData.id)}>
                        {rawData[key] || ""}
                    </p>
                );
            }

            filesArray.push(row);
        }
        return filesArray;
    };

    const resetSearch = async () => {
        const response = await FileAPIService.getAllFile();
        setFiles(getFileFromResponse(response));
        setSearch({});
    };

    const handleSearch = async () => {
        try {
            setIsLoading(true);
            const response = await FileAPIService.searchFile(search);
            setIsLoading(false);
            setFiles(getFileFromResponse(response));
        } catch (error) {
            console.error(error);
        }
    };

    const handleChangeSearch = (name, value) => {
        setSearch((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (searchQuery) {
            search["title"] = searchQuery;
            handleSearch();
            setSearch({ title: searchQuery });
        }
        setIsLoading(false);
    }, [])

    const BUTTON_ACTIONS = [
        {
            title: "Tìm kiếm",
            btn_class_name: "custom-btn-search",
            icon: <i className="fa-solid fa-magnifying-glass"></i>,
            onClick: handleSearch,
        },
        {
            title: "Xóa bộ lọc",
            btn_class_name: "custom-btn-clear-filter",
            icon: <i className="fa-solid fa-sync"></i>,
            onClick: resetSearch,
        }
    ];

    return (
        <>
            <div className="w-full px-[24px] pt-[12px] pb-[16px] bg-white">
                <p className="text-[14px] font-300 cursor-pointer ">
                    {/*<span className="text-[rgba(160,158,158,0.45)]">
                        {parent.map((item, index) => {
                            return (
                                <Link key={index} to={item.link}>
                                    {item.title} /{" "}
                                </Link>
                            );
                        })}
                    </span>
                    <span>
                        <Link to={current.link}>{current.title}</Link>
                    </span>
                    */}
                </p>
            </div>

            <div className="w-full px-[24px] pb-[16px] bg-white">
                <p className="text-[20px] font-bold ">Danh sách hồ sơ</p>
            </div>
            {showTable && (
                <div>
                    <div className="w-full my-[24px]">
                        <div className="mt-[16px] mx-[24px] flex ">
                            <div className="w-[11.11111%] px-[5px]">
                                <Input
                                    allowClear
                                    onChange={(ev) =>
                                        handleChangeSearch("title", ev.target.value)
                                    }
                                    value={search["title"]}
                                    name="title"
                                    placeholder="Tiêu đề hồ sơ"
                                    className="rounded-md border-[0.1rem] text-[12px] w-full px-[12px] py-[6px] truncate h-[32px] flex items-center"
                                ></Input>
                            </div>
                            <div className="w-[11.11111%] px-[5px]">
                                <Input
                                    value={search["start_date"]}
                                    onChange={(ev) =>
                                        handleChangeSearch("start_date", ev.target.value)
                                    }
                                    name="start_date"
                                    placeholder="Ngày bắt đầu"
                                    type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="rounded-md border-[0.1rem] text-[12px] w-full px-[12px] py-[6px] truncate h-[32px]"
                                ></Input>
                            </div>
                            <div className="w-[11.11111%] px-[5px]">
                                <Input
                                    value={search["end_date"]}
                                    onChange={(ev) =>
                                        handleChangeSearch("end_date", ev.target.value)
                                    }
                                    name="end_date"
                                    placeholder="Ngày kết thúc"
                                    type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="rounded-md border-[0.1rem] text-[12px] w-full px-[12px] py-[6px] truncate h-[32px]"
                                ></Input>
                            </div>

                            {BUTTON_ACTIONS.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="w-[11.11111%] text-white text-center px-[5px] rounded-[5px] flex"
                                    >
                                        <Button
                                            onClick={item.onClick}
                                            className={`rounded-[5px] flex justify-center bg-[#00f] w-full px-[12px] py-[6px] text-[12px] text-white items-center ${item.btn_class_name}`}
                                        >
                                            <div className="mr-[8px]">{item.icon}</div>
                                            {item.title}
                                        </Button>
                                    </div>
                                );
                            })}


                        </div>
                        <Table
                            setStateCheckBox={setStateCheckBox}
                            fieldNames={FIELDS_TABLE_SEARCH_FILE}
                            fieldDatas={files}
                            isLoading={isLoading}
                            isCheckBox={true}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default FileSearch;
