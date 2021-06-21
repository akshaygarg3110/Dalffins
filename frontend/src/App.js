import React, { useState } from "react";
import "./App.css";
import Food_Selection from "./pages/food_selection/food_selection";
import MyKitchen from "./pages/Kitchen/MyKitchen";
import { Switch, Route } from "react-router-dom";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import SignUp from "./pages/sign_up/SignUp";
import Layout from "./components/Kitchen/Layout";
import Main from "./components/Kitchen/Main";
import SummaryAndPayment from "./pages/SummaryAndPayment/SummaryAndPayment";
import Login from './pages/login/Login';

function App() {
  const [orderedItems, setOrderedItems] = useState(new Map());
  const [orderedItemsSize, setOrderedItemsSize] = useState(0);

  const orderItemHandler = (orderedItemsInput) => {
    console.log(orderedItemsInput);
    setOrderedItems(orderedItemsInput);
    setOrderedItemsSize(orderedItems.size);
    console.log(orderedItemsSize);
  };

  return (
    <>
      <header>
        {console.log("orderedItems " + orderedItems)}
        <Menu orderedItems={orderedItems} />
      </header>
      <Switch>
        <Route exact path="/foodSelection">
          <Food_Selection onOrderItemClick={orderItemHandler} />
        </Route>

        <Route exact path="/kitchen">
          <Layout>
            <Main>
              <MyKitchen />
            </Main>
          </Layout>
        </Route>
        <Route exact path="/summaryAndPayment">
          <SummaryAndPayment orderItems={orderedItems} />
        </Route>
        <Route exact path="/" component={SignUp} />

        <Route exact path="/home">
          <Food_Selection />
        </Route>

        <Route exact path="/login" component={Login} />

        <Route exact path="/home">
          <Food_Selection />
        </Route>

      </Switch>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
