import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando detalle...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return null;

  return (
    <section style={{ padding: "20px" }}>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ width: "150px" }} />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
    </section>
  );
}

export default DetalleProducto;