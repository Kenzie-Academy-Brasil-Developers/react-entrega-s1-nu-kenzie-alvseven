import "./styles.css";

export default function MainPage({ setLogin }) {
  const handleLogin = (event) => {
    event.preventDefault();
    setLogin(true);
  };

  return (
    <div className="container">
      <div className="container-login">
        <img src="./nukenzie.svg" alt="Logo NuKenzie" className="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <button type="submit" onClick={(event) => handleLogin(event)}>
          Iniciar
        </button>
      </div>
      <img src="./image.svg" alt="elise" className="ellipse" />
    </div>
  );
}
