import Productos from "./Productos";

function Moda({ onAgregar }) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Sección Moda</h2>
      <Productos onAgregar={onAgregar} />
    </section>
  );
}

export default Moda;