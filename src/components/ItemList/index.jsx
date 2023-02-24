import React from "react";
import Item from "../Item";

const ItemList = ({ data = [] }) => {
	return data.map((servicio) => <Item key={servicio.id} info={servicio} description />);
};

export default ItemList;
