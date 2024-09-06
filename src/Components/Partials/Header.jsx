import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<header>
			<Link to={"/"}>
				<h1>Vi-Shop</h1>
			</Link>
			{/* <nav>
				<NavLink to={"/"}>home</NavLink>
			</nav> */}

			<button>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</header>
	);
}

export default Header;
