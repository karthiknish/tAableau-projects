import { useRef, useEffect } from "react";
const { tableau } = window;
function Traffic() {
  const ref = useRef(null);
  useEffect(() => {
    initViz();
  }, []);
  const url =
    "https://public.tableau.com/views/Trafficcongestion_16035640194870/Dashboard1";
  function initViz() {
    new tableau.Viz(ref.current, url);
  }
  return (
    <div>
      Traffic congestion across Europe
      <div ref={ref}></div>
    </div>
  );
}

export default Traffic;
