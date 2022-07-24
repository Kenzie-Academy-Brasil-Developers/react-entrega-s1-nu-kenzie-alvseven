import "./filter.css";

export default function Filter({ listTransactions, setListTransactions }) {
  const filterTodos = () => {
    setListTransactions(setListTransactions);
  };

  const filterEntradas = () => {
    const filteredEntradas = listTransactions.filter(
      (item) => item.type === "Entrada"
    );
    setListTransactions(filteredEntradas);
  };

  const filterDespesas = () => {
    const filteredDespesas = listTransactions.filter(
      (item) => item.type === "Despesa"
    );
    setListTransactions(filteredDespesas);
  };

  return (
    <div className="filter-container">
      <h3>Resumo financeiro</h3>
      <div className="buttons-container">
        <button className="btn-todos selected" onClick={() => filterTodos()}>
          Todos
        </button>
        <button className="btn-entradas" onClick={() => filterEntradas()}>
          Entradas
        </button>
        <button className="btn-despesas" onClick={() => filterDespesas()}>
          Despesas
        </button>
      </div>
    </div>
  );
}
