import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackHome from "./Partials/BackHome";

function Product() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			const data = await response.json();
			setProduct(data);
		}
		fetchData();
	}, []);

	return (
		<main>
			<BackHome />
			<section>
				{!product ? (
					<p>Loading...</p>
				) : (
					<>
						<h2>Our Product n°{product.id}</h2>
						<article>
							<h3>{product.title}</h3>
							<p>{product.body}</p>
						</article>
					</>
				)}
			</section>
		</main>
	);
}

export default Product;
