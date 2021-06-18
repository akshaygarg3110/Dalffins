import React, { Component, useState } from "react";
import Image from "react-bootstrap/Image";
import "./food_item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Food_Item = (props) => {
  const [quantity, setQuantity] = useState(0);

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      <Alert>This is a alert—check it out!</Alert>;
    }
  };

  return (
    <Card style={{ height: "350px", marginBottom: "50px" }}>
      <Card.Body>
        <Card.Img src={props.foodItem.image} style={{ height: "150px" }} />
        {/* <Image src="images/Dal-Makhani.jpg" rounded fluid /> */}
        <Card.Title style={{ marginTop: "4%", fontSize: "16px" }}>
          {props.foodItem.item}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>
          {props.foodItem.description}
        </Card.Subtitle>
        {/* <Card.Text>
        Dal Makhani, 4 roti, salad, 1 glass of lassi(700-900 Cal.)
      </Card.Text> */}
        <Card.Text style={{ fontSize: "16px", fontWeight: "bold" }}>
          {props.foodItem.price}
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