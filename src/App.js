import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Covid19 from "./pages/Covid19";
import Fuelprice from "./pages/Fuelprice";
import Traffic from "./pages/Traffic";
import Home from "./pages/Home";
import Airport from "./pages/Airport";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/covid19">
          <Covid19 />
        </Route>
        <Route path="/traffic">
          <Traffic />
        </Route>
        <Route path="/fuelprice">
          <Fuelprice />
        </Route>
        <Route path="/airport">
          <Airport />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
