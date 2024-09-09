import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCartShopping,
	faHome,
	faRightFromBracket,
	faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

import { MenuContext } from "../../store/menu/Context";
import { UserContext } from "../../store/user/Context";

function Header() {
	const state = useContext(UserContext);

	const [type, setType] = useState(
		window.innerWidth > 600 ? "tabletAndMore" : "mobile"
	);
	const { isOpen, toggleMenu } = useContext(MenuContext);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 600) {
				setType("tabletAndMore");
				return;
			}
			setType("mobile");
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header>
			<Link to={"/"}>
				<h1>
					<FontAwesomeIcon icon={faOpencart} /> Vi-Shop
				</h1>
			</Link>
			{type === "mobile" && (
				<button onClick={toggleMenu}>
					<FontAwesomeIcon icon={faBars} />
				</button>
			)}

			<nav
				className={`nav ${
					type === "mobile" && isOpen ? "burger" : "screen"
				}`}
			>
				<Link to={"/"}>
					<FontAwesomeIcon icon={faHome} /> home
				</Link>
				<Link to={"cart"}>
					<FontAwesomeIcon icon={faCartShopping} /> cart
				</Link>

				{state.user.isLogged ? (
					<button onClick={() => state.logout()}>
						<FontAwesomeIcon icon={faRightFromBracket} /> logout
					</button>
				) : (
					<Link to={"login"}>
						<FontAwesomeIcon icon={faRightToBracket} /> login
					</Link>
				)}
			</nav>
		</header>
	);
}

export default Header;
