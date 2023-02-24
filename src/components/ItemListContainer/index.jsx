import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import Title from "../Title";


const servicios = [
	{
		id: 1,
		image:
			"https://guamiadiestramiento.000webhostapp.com/images/claseonline.jpg",
		category: "clases",
		title: "CLASE ONLINE",
	},
	{
		id: 2,
		image:
			"https://guamiadiestramiento.000webhostapp.com/images/clasedomiciliaria.jpeg",
		category: "clases",
		title: "CLASE DOMICILIARIA",
	},
	{
		id: 3,
		image:
			"https://guamiadiestramiento.000webhostapp.com/images/claseenparque.jpeg",
		category: "clases",
		title: "CLASE EN PARQUE",
	},
	{
		id: 4,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0O6npnVW_F-LTqxbSh9ugN3BlOVKjMo6UzVZCDxNVtGH8QRdXjGQHoTJuh7c1rc-CEs&usqp=CAU",
		category: "productos",
		title: "KONG",
	},
	{
		id: 5,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L0rklm-EfLTJLlL_kAJYtSg08hvzPtCqEw&usqp=CAU",
		category: "productos",
		title: "CORREA 20 METROS",
	},
];

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(servicios);
			}, 1000);
		});
		if (categoriaId) {
			getData.then((res) =>
				setData(res.filter((servicio) => servicio.category === categoriaId)),
			);
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoriaId]);

	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};

	return (
		<>
			<Title greeting={texto} />
			<ItemCount initial={0} stock={5} onAdd={onAdd} />
			<div className="lista"><ItemList data={data} /></div>
		</>
	);
};

export default ItemListContainer;
