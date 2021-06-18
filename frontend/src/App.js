import logo from "./logo.svg";
import "./App.css";
import Food_Selection from "./pages/food_selection/food_selection";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        {" "}
        <h1>Dalfinns</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Food_Selection />
        </Route>

        <Route exact path="/old">
          <Food_Selection />
        </Route>

        <Route path="/new">
          <Food_Selection />
        </Route>
      </Switch>
      <footer>
        {" "}
        <h6> CopyRight</h6>
      </footer>
    </>
  );
}

export default App;
