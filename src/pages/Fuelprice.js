import { useRef, useEffect } from "react";
const { tableau } = window;
function FuelPrice() {
  const ref = useRef(null);
  useEffect(() => {
    initViz();
  }, []);
  const url =
    "https://public.tableau.com/views/FuelPrice_16035620694390/Dashboard1";
  function initViz() {
    new tableau.Viz(ref.current, url);
  }
  return (
    <div>
      Fuel Price Variance
      <div ref={ref}></div>
    </div>
  );
}

export default FuelPrice;
