import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import image from "../assets/img/no_photo.webp";
import { MenuContext } from "../store/menu/Context";

function Home() {
	const { isOpen, toggleMenu } = useContext(MenuContext);

	const [products, setProducts] = useState(null);

	useEffect(() => {
		if (isOpen) toggleMenu();
	}, []);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/photos?_limit=20"
			);
			const data = await response.json();
			setProducts(data);
		}
		fetchData();
	}, []);

	return (
		<main id="home">
			<section>
				<h2>Some products</h2>


				{!products ? (
					<p>Loading...</p>
				) : (
					products.map((product) => (
						<article key={product.id}>
							<h2>{product.title.substring(0, 15)}..</h2>
							<img src={image} alt={product.title} />

							<div className="cta-product">
								<Link to={`/product/${product.id}`}>
									See more
								</Link>
								<button>
									<FontAwesomeIcon icon={faCartPlus} />
								</button>
							</div>
						</article>
					))
				)}
			</section>
		</main>
	);
}

export default Home;
