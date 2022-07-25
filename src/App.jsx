import { useState } from "react";

import Mainpage from "./components/Mainpage";
import Homepage from "./components/Homepage";

import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [list, setList] = useState(listTransactions);

  const filterTodos = () => {
    setList(listTransactions);
  };

  const filterEntradas = () => {
    const filteredEntradas = listTransactions.filter(
      (item) => item.type === "Entrada"
    );
    setList(filteredEntradas);
  };

  const filterDespesas = () => {
    const filteredDespesas = listTransactions.filter(
      (item) => item.type === "Despesa"
    );
    setList(filteredDespesas);
  };

  return (
    <>
      {!login ? (
        <Mainpage setLogin={setLogin} />
      ) : (
        <Homepage
          setLogin={setLogin}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          list={list}
          setList={setList}
          filterTodos={filterTodos}
          filterEntradas={filterEntradas}
          filterDespesas={filterDespesas}
        />
      )}
    </>
  );
}

export default App;
