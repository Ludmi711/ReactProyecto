import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";

const servicios = [
	{
		id: 1,
		image:
			"https://guamiadiestramiento.000webhostapp.com/images/claseonline.jpg",
		category: "clases",
		title: "CLASE ONLINE",
		description: "Llegamos a todo el mundo, las tomas desde la comodidad de tu casa y con la misma efectividad que las clases presenciales",
	},
	{
		id: 2,
		image:
			"https://guamiadiestramiento.000webhostapp.com/images/clasedomiciliaria.jpeg",
		category: "clases",
		title: "CLASE DOMICILIARIA",
		description:"Llegamos a múltiples zonas de CABA y zona sur, para trabajar mayor comodida y tratar problematicas propias dentro del hogar",
	},
	{
		id: 3,
		image:
			"https://guamiadiestramiento.000webhostapp.com/images/claseenparque.jpeg",
		category: "clases",
		title: "CLASE EN PARQUE",
		description: "También hay clases en los parques más cercanos, pueden ser grupales o inviduales para tratar más que nada problematicas sociales",
	},
	{
		id: 4,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0O6npnVW_F-LTqxbSh9ugN3BlOVKjMo6UzVZCDxNVtGH8QRdXjGQHoTJuh7c1rc-CEs&usqp=CAU",
		category: "productos",
		title: "KONG",
		description: "El KONG es un accesorio muy útil para el aprendizaje canino desde los primeros años del perro, ya que puede servirle desde mordedor a comedero. Está fabricado en un material flexible pero resistente que le dará muchas horas de juego y actividad.",
	},
	{
		id: 5,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L0rklm-EfLTJLlL_kAJYtSg08hvzPtCqEw&usqp=CAU",
		category: "productos",
		title: "CORREA 20 METROS",
		description: "Los perros pueden caminar más rápido y mientras exploran pueden querer acercarse a zonas de manera más rápida que tú, por lo que darle correa en esas situaciones ayudará a que el paseo lo perciba más a gusto y sin tensión.",
	},
];


const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(servicios);
			}, 1000);
		});
		getData.then((res) =>
			setData(res.find((servicio) => servicio.id === parseInt(detalleId))),
		);
	}, [detalleId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
