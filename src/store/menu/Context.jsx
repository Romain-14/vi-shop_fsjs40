import { createContext, useState} from "react";
import PropTypes from "prop-types";

const MenuContext = createContext();

function Provider({children}) {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<MenuContext.Provider value={{ isOpen, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};  

export { MenuContext };

export default Provider;
