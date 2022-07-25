import "./list.css";

export default function List({
  list,
  setList,
  listTransactions,
  setListTransactions,
}) {
  const removeItem = (id) => {
    const filteredList = listTransactions.filter((item, index) => {
      return index !== Number(id);
    });
    setListTransactions(filteredList);
    setList(filteredList);
  };

  return (
    <ul className="items">
      {list.length > 0 ? (
        list.map((item, index) => {
          let classLi = "";
          item.type === "Entrada"
            ? (classLi = "item enter")
            : (classLi = "item");

          return (
            <li key={index} className={classLi}>
              <div className="card-item">
                <div className="description-container">
                  <h5>{item.description}</h5>
                  <p>{item.type}</p>
                </div>
                <div className="info-container">
                  <p>R$ {item.value}</p>
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
