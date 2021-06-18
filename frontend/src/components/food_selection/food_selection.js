import React, { Component, useState } from "react";
import "./food_selection.css";
import Food_Item from "../food_item/food_item";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Food_Selection = () => {
  const [kitchenName, setKitchenName] = useState("Indian Kitchen");
  const [kitchenImages, setKitchenImages] = useState([
    "images/Kitchen1.jpg",
    "images/Kitchen2.jpg",
  ]);
  const [foodItems, setFoodItems] = useState([
    {
      image: "images/Dal-Makhani.jpg",
      item: "Dal Makhani Meal",
      description: "dal makhani, 4 roti, salad, 1 glass of lassi(700-900 Cal.)",
      price: "$5.90 + tax",
    },
    {
      image: "images/Rajma-Chawal-3.jpg",
      item: "Rajma Chawal Meal",
      description:
        "red kidney bean, 2 rice portions, salad, 1 glass of lassi(800-1000 Cal.)",
      price: "$6.20 + tax",
    },
    {
      image: "images/paneer-butter-masala_-2.jpg",
      item: "Paneer Butter Masala Meal",
      description:
        "paneer butter masala, 4 butter naan, salad, 1 glass of lassi(1300-1500 Cal.)",
      price: "$8.10 + tax",
    },
  ]);

  return (
    <div className="div-dimensions center-align">
      <h1>{kitchenName}</h1>
      <br />
      <Carousel style={{ height: "50vh" }}>
        {kitchenImages.map((image) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              style={{ height: "50vh" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
      <br />
      <h4> Menu Items </h4>
      <br />

      <Container>
        <Row>
          {foodItems.map((foodItem) => (
            <Col sm={4}>
              <Food_Item foodItem={foodItem} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Food_Selection;