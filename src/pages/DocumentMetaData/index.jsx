import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import TableDetail from "src/components/TableDetail";
import DocumentAPIService from "src/service/api/DocumentAPIService";
import { FIELDS_TABLE_DOCUMENT_DETAIL } from "src/storage/DocumentStorage";

const DocumentMetaData = () => {
    const params = useParams();
    const {idFile, id} = params;
    const [doc, setDoc] = useState([])
    const fieldData = []

    for(const i in FIELDS_TABLE_DOCUMENT_DETAIL) {
        const detail = FIELDS_TABLE_DOCUMENT_DETAIL[i]
        fieldData.push({title: detail.title, value: doc[detail.key]})
    }

    useEffect(() =>{
        const getDocById = async () => {
            const response = await DocumentAPIService.getDocumentById(idFile, id)
            setDoc(response)
        }
        getDocById();
    }, [idFile, id])

    return (
        <TableDetail
            headText={"Thông tin văn bản"}
            data={fieldData}
        />
    )
}

export default DocumentMetaData
