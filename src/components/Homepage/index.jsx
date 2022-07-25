import Header from "../Header";
import Form from "../Form";
import TotalMoney from "../TotalMoney";
import Filter from "../Filter";
import List from "../List";

import "./homepage.css";

export default function Homepage({
  setLogin,
  listTransactions,
  setListTransactions,
  list,
  setList,
  filterTodos,
  filterEntradas,
  filterDespesas,
}) {
  return (
    <>
      <Header setLogin={setLogin} />
      <div className="main">
        <div className="form-total-container">
          <Form setListTransactions={setListTransactions} setList={setList} />
          <TotalMoney list={list} />
        </div>
        <div className="filter-list-container">
          <Filter
            filterTodos={filterTodos}
            filterEntradas={filterEntradas}
            filterDespesas={filterDespesas}
          />
          <List
            list={list}
            setList={setList}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      </div>
    </>
  );
}
