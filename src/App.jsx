/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App = () => {
	return (
		<div>
			<Layout
				children={<Home />}
			/>
		</div>
	)
};
export default App;
