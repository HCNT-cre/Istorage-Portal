/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import DocumentSearch from "./pages/DocumentSearch";
import FileSearch from "./pages/FileSearch";
import DocumentMetaData from "./pages/DocumentMetaData";
import FileMetaData from "./pages/FileMetaData";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout
						children={<Home />}
					/>} />
					<Route path="/van-ban" element={<Layout
						children={<DocumentSearch />}
					/>} />
					<Route path="/ho-so" element={<Layout
						children={<FileSearch />}
					/>} />
					<Route path="/van-ban/:idFile/:id" element={<Layout
						children={<DocumentMetaData />}
					/>} />
					<Route path="/ho-so/:id" element={<Layout
						children={<FileMetaData />}
					/>} />
				</Routes>
			</BrowserRouter>

		</div>
	)
};
export default App;
