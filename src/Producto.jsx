import { Link } from "react-router-dom";

function Producto({ producto, onAgregar }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <Link to={`/producto/${producto.id}`}>
        <h3>{producto.title}</h3>
      </Link>
      <p>Precio: ${producto.price}</p>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default Producto;