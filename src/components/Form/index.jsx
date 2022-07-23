import "./styles.css";

export default function Form({ listTransactions, setListTransactions }) {
  return (
    <form>
      <label>
        Descrição
        <input
          placeholder="Digite aqui sua descrição"
          name="description"
        ></input>
      </label>
      <label>
        Valor
        <input placeholder="1" name="value"></input>
      </label>

      <label>
        Tipo de valor
        <select>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </label>

      <button type="submit">Inserir valor</button>
    </form>
  );
}
