function Carrito({ items, onEliminar }) {
    return (
      <section style={{ padding: "20px", borderTop: "1px solid #ccc" }}>
        <h2>Carrito</h2>
        {items.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {item.title} - ${item.price}
                <button
                  onClick={() => onEliminar(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
  
  export default Carrito;