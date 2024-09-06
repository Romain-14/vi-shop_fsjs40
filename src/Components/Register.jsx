import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Form from "./Partials/Form";
import { MenuContext } from "../store/menu/Context";

function Register() {
	const { isOpen, toggleMenu } = useContext(MenuContext);

	const [user, setUser] = useState({ username: "", password: "" });

	const [msg, setMsg] = useState(null);

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
		navigate("/login");
	}

	return (
		<main>
			<Form
				submitHandler={submitHandler}
				user={user}
				setUser={setUser}
				msg={msg}
			>
				<button type="submit">Register</button>
			</Form>
		</main>
	);
}

export default Register;
