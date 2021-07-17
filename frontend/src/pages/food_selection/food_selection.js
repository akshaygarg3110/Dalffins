import React, { Component, useState, useEffect } from "react";
import "./food_selection.css";
import Food_Item from "../../components/food_item/food_item";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import axios from "axios";

const Food_Selection = (props) => {
  const [kitchenName, setKitchenName] = useState("");
  const [kitchenImages, setKitchenImages] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const param = useParams();

  const api_url = "http://localhost:8080/foodSelection/" + param.id;

  useEffect(() => {
    async function fetchFooditems() {
      await axios
        .get(api_url)
        .then((res) => {
          console.log("res    " + JSON.stringify(res));

          setKitchenName(res.data.data.kitchenName);
          setKitchenImages(res.data.data.kitchenImages);
          setFoodItems(res.data.data.foodItems);
        })
        .catch((error) => {
          if (error.response) {
            console.log("Invalid Id");
          }
        });
    }
    fetchFooditems();
  }, []);

  console.log("kitchenImages    " + kitchenImages);
  console.log("kitchenName    " + kitchenName);
  console.log("foodItems    " + foodItems);

  // const [kitchenName, setKitchenName] = useState("Indian Kitchen");
  // const [kitchenImages, setKitchenImages] = useState([
  //   "images/Kitchen1.jpg",
  //   "images/Kitchen2.jpg",
  // ]);
  // const [foodItems, setFoodItems] = useState([
  //   {
  //     id: 1,
  //     image: "images/Dal-Makhani.jpg",
  //     item: "Dal Makhani Meal",
  //     description: "dal makhani, 4 roti, salad, 1 glass of lassi(700-900 Cal.)",
  //     price: "$5.90 + tax",
  //   },
  //   {
  //     id: 2,
  //     image: "images/Rajma-Chawal-3.jpg",
  //     item: "Rajma Chawal Meal",
  //     description:
  //       "red kidney bean, 2 rice portions, salad, 1 glass of lassi(800-1000 Cal.)",
  //     price: "$6.20 + tax",
  //   },
  //   {
  //     id: 3,
  //     image: "images/paneer-butter-masala_-2.jpg",
  //     item: "Paneer Butter Masala Meal",
  //     description:
  //       "paneer butter masala, 4 butter naan, salad, 1 glass of lassi(1300-1500 Cal.)",
  //     price: "$8.10 + tax",
  //   },
  // ]);

  // const [foodItems, setFoodItems] = useState([
  //   {
  //     id: 6,
  //     title: "Dal Makhani Meal",
  //     rating: 3,
  //     img: "images/Dal-Makhani.jpg",
  //     cost: "$6",
  //     mealType: "Snack",
  //     delivery: "Free",
  //   },
  //   {
  //     id: 6,
  //     title: "Rajma Chawal Meal",
  //     rating: 3,
  //     img: "images/Rajma-Chawal-3.jpg",
  //     cost: "$6",
  //     mealType: "Snack",
  //     delivery: "Free",
  //   },
  // ]);

  const [orderedItemsMap, setOrderedItemsMap] = useState(new Map());

  const orderItemHandler = (orderedItem) => {
    let orderItemId = orderedItem.id;
    let quantity = orderedItem.quantity;

    if (orderedItemsMap.get(orderItemId) === undefined && quantity > 0) {
      orderedItemsMap.set(orderedItem.id, orderedItem);
    } else {
      if (quantity == 0) {
        orderedItemsMap.delete(orderItemId);
      }
    }

    props.onOrderItemClick(orderedItemsMap);
  };

  return (
    <div className="div-dimensions center-align">
      <br />
      <br />
      <br />
      <br />
      <h1>{kitchenName}</h1>
      <br />
      <Carousel style={{ height: "50vh" }}>
        {kitchenImages.length > 0 ? (
          kitchenImages.map((image) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image}
                style={{ height: "50vh" }}
              />
            </Carousel.Item>
          ))
        ) : (
          <b> No images available for this Vendor.</b>
        )}
      </Carousel>
      <br />
      <br />
      <h4> Menu Items </h4>
      <br />

      <Container>
        <Row>
          {foodItems.length > 0 ? (
            foodItems.map((foodItem) => (
              <Col sm={4}>
                <Food_Item
                  foodItem={foodItem}
                  onOrderItemClick={orderItemHandler}
                />
              </Col>
            ))
          ) : (
            <b> No food items available for this Kitchen.</b>
          )}
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Food_Selection;
