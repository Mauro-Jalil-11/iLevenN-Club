import { useState, useEffect } from "react";
import Producto from "./Producto";

function Productos({ onAgregar }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section style={{ padding: "20px" }}>
      <h2>Productos disponibles</h2>
      {productos.map((p) => (
        <Producto key={p.id} producto={p} onAgregar={onAgregar} />
      ))}
    </section>
  );
}

export default Productos;