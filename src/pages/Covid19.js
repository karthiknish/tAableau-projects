import TableauReport from "tableau-react-embed";
function Covid19() {
  return (
    <div>
      Covid
      <TableauReport url="https://public.tableau.com/profile/karthik.nishanth#!/vizhome/WhoCovid19Analysis/Dashboard1" />
    </div>
  );
}

export default Covid19;
