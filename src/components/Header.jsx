import world from "../assets/world-icon.png";

function Header() {
  return (
    <header>
      <img src={world} alt="" />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;
