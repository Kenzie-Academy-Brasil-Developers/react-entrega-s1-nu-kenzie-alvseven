import "./list.css";

export default function List({
  list,
  setList,
  listTransactions,
  setListTransactions,
}) {
  const removeItem = (id) => {
    const itemInListTransactions = listTransactions[Number(id)];

    const filteredListTransactions = listTransactions.filter(
      (item) => item.description !== itemInListTransactions.description
    );
    setListTransactions(filteredListTransactions);
    setList(filteredListTransactions);
  };

  return (
    <ul className="items">
      {list.length > 0 ? (
        list.map((item, index) => {
          let classLi = "";
          item.type === "Entrada"
            ? (classLi = "item enter")
            : (classLi = "item");

          const value = item.value;
          const formatedValue = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          return (
            <li key={index} className={classLi}>
              <div className="card-item">
                <div className="description-container">
                  <h5>{item.description}</h5>
                  <p>{item.type}</p>
                </div>
                <div className="info-container">
                  <p>
                    {item.type === "Entrada"
                      ? `+ ${formatedValue}`
                      : `- ${formatedValue}`}
                  </p>
                  <button
                    id={index}
                    onClick={(event) => removeItem(event.target.id)}
                  >
                    <img src="./trash.svg" alt="imagem de uma lixeira"></img>
                  </button>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <h2>Você ainda não possui lançamentos</h2>
      )}
    </ul>
  );
}
