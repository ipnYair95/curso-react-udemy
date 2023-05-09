import { AddCategory, GifGrid } from "./components";
import { useState } from "react";
import "./styles.css";

export const GirExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);

	const onAddCategory = (newCategory) => {
		
		if (categories.includes(newCategory)) {
			return;
		}

		setCategories((c) => [...c, newCategory]);
	};

	return (
		<>

			<h1> Gif Expert App </h1>

			<AddCategory onNewCategory={(event) => onAddCategory(event)} />

			{
				categories.map((category) => (
					<GifGrid key={category} category={category} />
				))
			}

		</>
	);
};
