import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import UserProvider from "./store/user/Context.jsx";
import MenuProvider from "./store/menu/Context.jsx";
import App from "./App.jsx";
import "./assets/index.scss";

createRoot(document.getElementById("root")).render(
	<MenuProvider>
		<UserProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserProvider>
	</MenuProvider>
);
