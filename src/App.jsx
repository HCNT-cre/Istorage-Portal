/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocumentSearch from "./pages/DocumentSearch";
import FileSearch from "./pages/FileSearch";
import DocumentMetaData from "./pages/DocumentMetaData";
import FileMetaData from "./pages/FileMetaData";

const routes = [
	{ path: "/", element: <Layout children={<Home />} /> },
	{ path: "/van-ban", element: <Layout children={<DocumentSearch />} /> },
	{ path: "/ho-so", element: <Layout children={<FileSearch />} /> },
	{ path: "/van-ban/:idFile/:id", element: <Layout children={<DocumentMetaData />} /> },
	{ path: "/ho-so/:id", element: <Layout children={<FileMetaData />} /> },
];

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
