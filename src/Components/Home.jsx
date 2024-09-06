import { useEffect, useState } from "react";
import image from "../assets/img/no_photo.webp";
import { Link } from "react-router-dom";

function Home() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/photos?_limit=20"
			);
			const data = await response.json();
			console.log(data);
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
						<h2>{product.title.substring(0,15)}..</h2>
						<img src={image} alt={product.title} />
                        <Link to={`/product/${product.id}`}>See more</Link>
                        <button>Add to cart</button>
					</article>
				))
			)}
            </section>
		</main>
	);
}

export default Home;
