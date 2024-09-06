import { Route, Routes } from "react-router-dom";

import Header from "./Components/Partials/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Product from "./Components/Product";
import Banner from "./Components/Banner";

function App() {
	return (
		<>
			<Header />
            
			<Banner />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="product/:id" element={<Product />} />

				<Route path="*" element={<h1>404 - Not Found</h1>} />
			</Routes>
		</>
	);
}

export default App;
