const Header = ({
    sideBarWidth,
    setSideBarWidth
}) => {
    return (
        <>
            <div className={`z-50 flex justify-between px-[16px] transition-all ${sideBarWidth === 250 ? "ml-[290px] w-[calc(99%-285px)]" : "ml-[90px] w-[calc(99%-85px)]"} h-[75px]  mt-[8px] border-[2px] border-blue-700 rounded-md bg-blue-300 top-0`}>
                <div className="flex justify-between items-center">
                    <button className="mr-[20px] text-[25px] font-bold text-black cursor-pointer toggle-side-bar-button" onClick={() => {
                        sideBarWidth === 250 ? setSideBarWidth(50) : setSideBarWidth(250)
                    }}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <p className="font-bold text-black text-[16px]">ISTORAGE - CỔNG THÔNG TIN KHAI THÁC</p>
                </div>
            </div>
        </>
    )
}

export default Header
