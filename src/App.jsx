import { Route, Routes } from "react-router-dom";

import Header from "./Components/Partials/Header";
import Home from "./Components/Home";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
