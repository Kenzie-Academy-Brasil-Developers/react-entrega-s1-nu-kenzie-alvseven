import "./styles.css";

export default function Form({ listTransactions, setListTransactions }) {
  return (
    <div className="main-container">
      <div className="form-container">
        <form>
          <div className="description-container">
            <label>Descrição</label>
            <input
              placeholder="Digite aqui sua descrição"
              name="description"
            ></input>
          </div>
          <div className="value-type-container">
            <div className="value-container">
              <label>Valor</label>
              <input placeholder="1" name="value"></input>
            </div>

            <div className="type-container">
              <label>Tipo de valor</label>
              <select>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </div>
          </div>

          <button type="submit">Inserir valor</button>
        </form>
        <div className="amount-container">
          <div className="amount">
            <h3 className="total-title">Valor total</h3>
            <p className="total-amount">R$ 3254.52</p>
          </div>
          <p className="info">O valor se refere ao saldo</p>
        </div>
      </div>
      <div className="filter-container">
        <h3>Resumo financeiro</h3>
        <div className="buttons-container">
          <button className="btn-todos">Todos</button>
          <button className="entrada">Entrada</button>
          <button className="despesa">Despesas</button>
        </div>
      </div>
    </div>
  );
}
