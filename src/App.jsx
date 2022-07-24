import { useState } from "react";

import Mainpage from "./components/Mainpage";
import Homepage from "./components/Homepage";

import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [login, setLogin] = useState(false);

  return (
    <>
      {!login ? (
        <Mainpage setLogin={setLogin} />
      ) : (
        <Homepage
          setLogin={setLogin}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </>
  );
}

export default App;
