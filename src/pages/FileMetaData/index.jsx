import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FileAPIService from "src/service/api/FileAPIService";
import TableDetail from "src/components/TableDetail";
import { FIELDS_TABLE_FILE_DETAIL } from "src/storage/FileStorage";
const FileMetaData = () => {
    const params = useParams();
    const { id } = params;
    const [file, setFile] = useState({});
    const fieldData = []

    for(const i in FIELDS_TABLE_FILE_DETAIL) {
        const detail = FIELDS_TABLE_FILE_DETAIL[i]
        fieldData.push({title: detail.title, value: file[detail.key]})
    }

    useEffect(() => {
        const getFile = async () => {
            const res = await FileAPIService.getFileById(id);
            setFile(res[0]);
        }
        getFile();
    }, [id])

    return (
        <TableDetail
            headText={"Thông tin văn bản"}
            data={fieldData}
        />

    )
}

export default FileMetaData
