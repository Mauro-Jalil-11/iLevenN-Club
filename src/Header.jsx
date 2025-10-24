import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#333", color: "#fff", padding: "10px" }}>
      <nav>
        <h2>iLevenN Club</h2>
        <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
          <li><Link to="/" style={{ color: "#fff" }}>Inicio</Link></li>
          <li><Link to="/moda" style={{ color: "#fff" }}>Moda</Link></li>
          <li><Link to="/faq" style={{ color: "#fff" }}>Preguntas Frecuentes</Link></li>
          <li><Link to="/reseñas" style={{ color: "#fff" }}>Reseñas</Link></li>
          <li><Link to="/contacto" style={{ color: "#fff" }}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;