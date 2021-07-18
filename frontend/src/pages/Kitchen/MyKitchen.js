//Author: Tanuj Sobti (B00864990)
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DishList from "./DishList";
import Carousel from "react-bootstrap/Carousel";


const TitleSection = styled.div`
  height: 40vh;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const KitchenImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function MyKitchen(props) {
  const [kitchenName, setKitchenName] = useState("Indian Kitchen");
  const [kitchenImages, setKitchenImages] = useState([
    "images/Kitchen1.jpg",
    "images/Kitchen2.jpg",
  ]);
  return (
    <>
       
       <Carousel style={{ height: "50vh" }}>
        {kitchenImages.map((image) => (
          <Carousel.Item>
            <KitchenImage
              className="d-block w-100"
              src={image}
              style={{ height: "50vh" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <br />
      <DishList userID={props.userId} />
      <br />
      <br />
    </>
  );
}

export default MyKitchen;
