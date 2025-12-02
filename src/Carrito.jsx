import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";
import { AuthContext } from "./AuthContext";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.bg || "#333"};
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;

function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
  const { user } = useContext(AuthContext);

  const handleEliminar = (id) => {
    eliminarProducto(id);
    toast.success("Producto eliminado del carrito ✅");
  };

  const handleVaciar = () => {
    vaciarCarrito();
    toast.info("Carrito vaciado 🛒");
  };

  return (
    <section className="container py-4">
      <Helmet>
        <title>iLevenN - Carrito</title>
        <meta name="description" content="Revisa y gestiona los productos en tu carrito de iLevenN Club." />
      </Helmet>

      <h2 className="mb-3"><FaShoppingCart /> Carrito</h2>
      {user && <p><strong>Usuario:</strong> {user.username}</p>}

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {carrito.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.nombre} - ${item.precio}</span>
                <Button bg="red" onClick={() => handleEliminar(item.id)} aria-label="Eliminar producto">
                  <FaTrash /> Eliminar
                </Button>
              </li>
            ))}
          </ul>
          <Button bg="#007bff" onClick={handleVaciar} aria-label="Vaciar carrito">
            <FaTrash /> Vaciar Carrito
          </Button>
        </>
      )}
    </section>
  );
}

export default Carrito;