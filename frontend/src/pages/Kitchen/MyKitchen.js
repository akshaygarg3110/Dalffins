import React from "react";
import styled from "@emotion/styled";
import DishList from "./DishList";

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

function MyKitchen() {
  return (
    <>
      <TitleSection>
        <Title>
          <h2>Hi Chef</h2>
          <h2>Welcome to the kitchen</h2>
        </Title>
        <div style={{ height: "100%" }}>
          <KitchenImage src="./assets/K12.jpg" alt="kitchen" />
        </div>
      </TitleSection>
      <DishList />
    </>
  );
}

export default MyKitchen;
