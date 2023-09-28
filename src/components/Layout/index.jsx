import Header from "../Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="mt-[98px]">
                {children}
            </div>
        </div>
    );
}

export default Layout;
