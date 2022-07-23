import Header from "../Header";
import Form from "../Form";
// import TotalMoney from "../TotalMoney";
// import List from "../List";
// import Card from "../Card";

export default function Homepage({ setLogin }) {
  return (
    <>
      <Header setLogin={setLogin} />
      <Form />
      {/* <TotalMoney />
      <List />
      <Card /> */}
    </>
  );
}
