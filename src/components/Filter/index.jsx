import "./filter.css";

export default function Filter({
  filterTodos,
  filterEntradas,
  filterDespesas,
}) {
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
