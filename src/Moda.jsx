import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";
import Productos from "./Productos";
import { Helmet } from "react-helmet";

function Moda() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <section className="container py-4">
      <Helmet>
        <title>iLevenN - Moda</title>
        <meta name="description" content="Explora la sección de moda en iLevenN y descubre productos únicos." />
      </Helmet>

      <h2 className="mb-4">Sección Moda</h2>
      <Productos onAgregar={agregarProducto} />
    </section>
  );
}

export default Moda;