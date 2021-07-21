import React, { useState } from "react";
import "./App.css";
import MyKitchen from "./pages/Kitchen/MyKitchen";
import { Switch, Route } from "react-router-dom";
import DalffinsMenu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Layout from "./components/Kitchen/Layout";
import Main from "./components/Kitchen/Main";

function App() {
  const [orderedItems, setOrderedItems] = useState(new Map());

  const [orderedItemsSize, setOrderedItemsSize] = useState(0);

  const [id, setId] = useState("");

  const [token, setToken] = useState("");

  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const orderItemHandler = (orderedItemsInput) => {
    console.log(orderedItemsInput);
    setOrderedItems(orderedItemsInput);
    setOrderedItemsSize(orderedItems.size);
    console.log(orderedItemsSize);
  };

  return (
    <>
      {console.log("orderedItems " + orderedItems)}
      <DalffinsMenu
        orderedItems={orderedItems}
        userToken={token}
        setUserToken={setToken}
        firstName={firstName}
      />

      <Switch>
        <Route exact path="/kitchen">
          <Layout>
            <Main>
             <MyKitchen userId="122" email="tanuj.sobti@dal.ca"/>
            </Main>
          </Layout>
        </Route>

      </Switch>

      <Footer userEmail="tanuj.sobti@dal.ca" />
    </>
  );
}

export default App;
