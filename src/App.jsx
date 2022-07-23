import { useState } from "react";

import MainPage from "./components/MainPage";
import Form from "./components/Form";

import "./App.css";

function App() {
  // const [listTransactions, setListTransactions] = useState([]);
  const [login, setLogin] = useState(false);
  return <>{!login ? <MainPage setLogin={setLogin} /> : <Form />}</>;
}

export default App;
