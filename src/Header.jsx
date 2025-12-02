import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";
import { AuthContext } from "./AuthContext";
import { FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background: #e63946;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
`;

function Header() {
  const { carrito } = useContext(CarritoContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand fw-bold" to="/">
          iLevenN Club
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/moda">Moda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">Preguntas Frecuentes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reseñas">Reseñas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link d-flex align-items-center" to="/carrito" aria-label="Ver carrito">
                <FaShoppingBag size={22} />
                {carrito?.length > 0 && <Badge>{carrito.length}</Badge>}
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item text-white d-flex align-items-center me-2">
                  Hola, {user.username}
                </li>
                <li className="nav-item">
                  <button
                    onClick={logout}
                    className="btn btn-light btn-sm"
                    aria-label="Cerrar sesión"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="btn btn-secondary fw-bold"
                  aria-label="Iniciar sesión"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;