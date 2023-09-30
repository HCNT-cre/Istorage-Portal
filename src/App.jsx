/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Files from "./pages/Files";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout
						children={<Home />}
					/>} />
					<Route path="/van-ban" element={<Layout
						children={<Files />}
					/>} />
				</Routes>
			</BrowserRouter>

		</div>
	)
};
export default App;
