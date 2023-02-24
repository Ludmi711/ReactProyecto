import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} className="servicio">
			<p>{info.title}</p>
			<img src={info.image} alt="" />
		</Link>
	);
};

export default Item;
