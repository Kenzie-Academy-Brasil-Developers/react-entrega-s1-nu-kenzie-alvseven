import "./totalmoney.css";

export default function TotalMoney({ list }) {
  const amount = list.reduce((acc, item) => {
    return item.type !== "Entrada" ? acc - item.value : acc + item.value;
  }, 0);

  return (
    <div className="amount-container">
      <div className="amount">
        <h3 className="total-title">Valor total</h3>
        <p className="total-amount">R$ {amount}</p>
      </div>
      <p className="info">O valor se refere ao saldo</p>
    </div>
  );
}
