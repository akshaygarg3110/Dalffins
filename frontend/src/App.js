import React, { useState } from "react";
import "./App.css";
import Food_Selection from "./pages/food_selection/food_selection";
import MyKitchen from "./pages/Kitchen/MyKitchen";
import { Switch, Route } from "react-router-dom";
import DalffinsMenu from "./components/menu/Menu";
import Footer from "./components/footer/footer";
import SignUp from "./pages/SignUp/SignUp";
import Layout from "./components/Kitchen/Layout";
import Main from "./components/Kitchen/Main";
import SummaryAndPayment from "./pages/SummaryAndPayment/SummaryAndPayment";
import Help from "./pages/Help/Help";
import Login from './pages/login/Login';
import HomePage from "./pages/homePage/HomePage";
import ForgotPasswordGetCode from './pages/forgotPassword/ForgotPasswordGetCode';
import ForgotPasswordEnterCode from "./pages/forgotPassword/forgotPasswordEnterCode";
import ResetPassword from "./pages/forgotPassword/ResetPassword";
import MyAccount from "./pages/myAccount/MyAccount";

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
        <DalffinsMenu orderedItems={orderedItems} />
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

        <Route exact path="/signup" component={SignUp}/>

        <Route exact path="/" component={HomePage} />

        <Route exact path="/home" component={HomePage} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/forgotPassword" component={ForgotPasswordGetCode} />

        <Route exact path="/forgotPasswordEnterCode" component={ForgotPasswordEnterCode} />

        <Route exact path="/resetPassword" component={ResetPassword} />

        <Route exact path="/help" component={Help} />

        <Route exact path="/myAccount" component={MyAccount} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
