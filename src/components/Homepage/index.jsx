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
}) {
  return (
    <>
      <Header setLogin={setLogin} />
      <div className="main">
        <div className="form-total-container">
          <Form setListTransactions={setListTransactions} />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="filter-list-container">
          <Filter
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      </div>
    </>
  );
}
