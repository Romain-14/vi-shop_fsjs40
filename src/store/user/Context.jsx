import { createContext, useState, useContext } from "react";
import { MenuContext } from "../menu/Context";
import PropTypes from "prop-types";

const UserContext = createContext();

const INITIAL_STATE = {
	username: "",
	isLogged: false,
};

function Provider({ children }) {
	const [user, setUser] = useState(INITIAL_STATE);
    const {toggleMenu}    = useContext(MenuContext);

	function login(username) {
		setUser({ username, isLogged: true });
	}

	function logout() {
		setUser(INITIAL_STATE);
        toggleMenu();
	}

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { UserContext };

export default Provider;
