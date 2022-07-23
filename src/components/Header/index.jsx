import "./styles.css";

export default function Header({ setLogin }) {
  const handleLogout = (event) => {
    event.preventDefault();
    setLogin(false);
  };
  return (
    <header>
      <div className="header">
        <div className="container-header">
          <img
            src="./nukenzieheader.svg"
            alt="Logo NuKenzie"
            className="logo"
          />
          <button
            className="logout-button"
            type="submit"
            onClick={(event) => handleLogout(event)}
          >
            Início
          </button>
        </div>
      </div>
    </header>
  );
}
