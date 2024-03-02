import { Table } from "src/components/Table";
import "react-toastify/dist/ReactToastify.css";
import { FIELDS_TABLE_REQUEST_STATE } from "src/storage/FileStorage";
import { setHeaderUnfixed } from "src/service/actions/headerAction";
import { useDispatch } from "react-redux";

const RequestState = () => {
    const dispatch = useDispatch();
    dispatch(setHeaderUnfixed());

    return (
        <>
            <div className="w-full px-[24px] pt-[12px] pb-[16px] bg-white">
                <p className="text-[14px] font-300 cursor-pointer ">
                </p>
            </div>

            <div className="w-full px-[24px] pb-[16px] bg-white">
                <p className="text-[20px] font-bold ">Trạng thái phiếu tin</p>
            </div>
            <Table
                fieldNames={FIELDS_TABLE_REQUEST_STATE}
                fieldDatas={[]}
                isCheckBox={true}
            />

        </>
    );
}

export default RequestState;
