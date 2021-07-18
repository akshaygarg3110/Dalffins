/* Author - Akshay Garg */

import React, { Component, useState } from "react";
import "./food_item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Food_Item = (props) => {
  const [quantity, setQuantity] = useState(0);

  const addItem = () => {
    setQuantity(quantity + 1);
    props.foodItem.quantity = quantity + 1;
    props.onOrderItemClick(props.foodItem);
  };

  const removeItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      props.foodItem.quantity = quantity - 1;
      props.onOrderItemClick(props.foodItem);
    } else {
      <Alert>This is a alert—check it out!</Alert>;
    }
  };

  return (
    <Card style={{ height: "350px", marginBottom: "50px" }}>
      <Card.Body>
        <Card.Img src={props.foodItem.img} style={{ height: "150px" }} />
        {/* <Image src="images/Dal-Makhani.jpg" rounded fluid /> */}
        <Card.Title style={{ marginTop: "4%", fontSize: "16px" }}>
          {props.foodItem.title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>
          Meal Type: {props.foodItem.mealType}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>
          Rating: {props.foodItem.rating}
        </Card.Subtitle>
        {/* <Card.Text>
        Dal Makhani, 4 roti, salad, 1 glass of lassi(700-900 Cal.)
      </Card.Text> */}
        <Card.Text style={{ fontSize: "16px", fontWeight: "bold" }}>
          {props.foodItem.cost}
        </Card.Text>
        <div style={{ marginTop: "10%" }}>
          <Button onClick={removeItem}>-</Button>
          <label style={{ marginLeft: "5%", marginRight: "5%" }}>
            {quantity}
          </label>
          <Button onClick={addItem}>+</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Food_Item;
