import "./totalmoney.css";

export default function TotalMoney() {
  return (
    <div className="amount-container">
      <div className="amount">
        <h3 className="total-title">Valor total</h3>
        <p className="total-amount">R$ 3254.52</p>
      </div>
      <p className="info">O valor se refere ao saldo</p>
    </div>
  );
}
