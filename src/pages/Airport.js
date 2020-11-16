import { useRef, useEffect } from "react";
const { tableau } = window;
function Airport() {
  const ref = useRef(null);
  useEffect(() => {
    initViz();
  }, []);
  const url =
    "https://public.tableau.com/views/AirportData_16033874222740/Dashboard1";
  function initViz() {
    new tableau.Viz(ref.current, url);
  }
  return (
    <div>
      Airport Data
      <div ref={ref}></div>
    </div>
  );
}

export default Airport;
