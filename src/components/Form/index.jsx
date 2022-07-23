import "./form.css";

export default function Form({ listTransactions, setListTransactions }) {
  return (
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
  );
}
