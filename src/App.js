import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Covid19 from "./pages/Covid19";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/covid19">
          <Covid19 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
