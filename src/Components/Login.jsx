import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../store/user/Context";
import { MenuContext } from "../store/menu/Context";

import Form from "./Partials/Form";

function Login() {
	const state = useContext(UserContext);
	const { isOpen, toggleMenu } = useContext(MenuContext);

	const [user, setUser] = useState({ username: "joey", password: "aze" });
	const [msg, setMsg]   = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (isOpen) toggleMenu();
	}, []);

	function submitHandler(e) {
		e.preventDefault();
		if (!user.username || !user.password) {
			setMsg("Please fill in all fields");
			return;
		}
		state.login(user.username);
		navigate("/");
	}

	return (
		<main>
			<Form
				submitHandler={submitHandler}
				user={user}
				setUser={setUser}
				msg={msg}
			>
				<button type="submit">Login</button>
				<hr />
				<p>
					No account yet ? create one -&gt;{" "}
					<Link to="/register">by clicking here</Link>
				</p>
			</Form>
		</main>
	);
}

export default Login;
