import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Home() {
  return (
    <div>
      All the Tableau Projects below <br />
      <Link to="/covid19"> Covid 19</Link>
    </div>
  );
}

export default Home;
