import "./form.css";

export default function Form({ setListTransactions, setList }) {
  const addTransaction = (e) => {
    e.preventDefault();
    const description = document.querySelector("form")[0].value;
    const type = document.querySelector("form")[2].value;
    const value = Number(document.querySelector("form")[1].value);

    const newTransaction = {
      description: description,
      type: type,
      value: value,
    };
    if (
      type === "Entrada" &&
      !value.toString().includes("-") &&
      description !== "" &&
      value !== 0
    ) {
      setListTransactions((oldListTransactions) => [
        ...oldListTransactions,
        newTransaction,
      ]);
      setList((oldListTransactions) => [
        ...oldListTransactions,
        newTransaction,
      ]);
      document.querySelector("form")[0].value = "";
      document.querySelector("form")[1].value = "";
      document.querySelector("form")[2].value = "Entrada";
    } else if (
      type === "Despesa" &&
      !value.toString().includes("+") &&
      description !== "" &&
      value !== 0
    ) {
      setListTransactions((oldListTransactions) => [
        ...oldListTransactions,
        newTransaction,
      ]);
      setList((oldListTransactions) => [
        ...oldListTransactions,
        newTransaction,
      ]);
      document.querySelector("form")[0].value = "";
      document.querySelector("form")[1].value = "";
      document.querySelector("form")[2].value = "Entrada";
    }
  };

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
          <input placeholder="R$ 1.350,00" name="value"></input>
        </div>

        <div className="type-container">
          <label>Tipo de valor</label>
          <select>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>

      <button type="submit" onClick={(event) => addTransaction(event)}>
        Inserir valor
      </button>
    </form>
  );
}
