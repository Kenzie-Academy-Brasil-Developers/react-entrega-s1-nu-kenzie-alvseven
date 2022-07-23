import { useState } from "react";

import MainPage from "./components/MainPage";
import "./App.css";
import Homepage from "./components/MainPage/Homepage";

function App() {
  // const [listTransactions, setListTransactions] = useState([]);
  const [login, setLogin] = useState(false);
  return (
    <>
      {!login ? (
        <MainPage setLogin={setLogin} />
      ) : (
        <Homepage setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
