/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Files from "./pages/Files";
import Login from "./pages/Login/login";
import Register from "./pages/Login/register";
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
					<Route path="/login" element={<Login />} /> 
					<Route path="/register" element={<Register />} />

				</Routes>
			</BrowserRouter>

		</div>
	)
};
export default App;
