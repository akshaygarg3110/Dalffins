import logo from "./logo.svg";
import "./App.css";
import Food_Selection from "./pages/food_selection/food_selection";
import MyKitchen from "./pages/Kitchen/MyKitchen";
import { Switch, Route } from "react-router-dom";
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import SignUp from "./pages/sign_up/SignUp";
import Layout from './components/kitchen/Layout'
import Main from './components/kitchen/Main'

function App() {
  return (
    <>
      <header>
        < Menu />
      </header>
      <Switch>
        <Route exact path="/foodSelection">
          <Food_Selection />
        </Route>

        <Route exact path="/kitchen">
            <Layout>
              <Main>
                <MyKitchen />
              </Main>
            </Layout>
        </Route>

        <Route exact path= '/' component= {SignUp}/>

        <Route exact path="/registersuccess">
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
