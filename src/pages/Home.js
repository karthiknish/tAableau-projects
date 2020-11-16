import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1> All the Tableau Projects below</h1> <br />
      <Link to="/covid19"> Covid 19</Link>
      <br />
      <Link to="/traffic">Traffic Congestion across Europe</Link>
      <br />
      <Link to="/fuelprice">Fuel Price Variation</Link>
      <br />
      <Link to="/airport">Airport Data</Link>
    </div>
  );
}

export default Home;
