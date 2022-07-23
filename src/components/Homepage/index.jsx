import Header from "../../Header";
import Form from "../../Form";

export default function Homepage({ setLogin }) {
  return (
    <>
      <Header setLogin={setLogin} />
      <Form />
    </>
  );
}
