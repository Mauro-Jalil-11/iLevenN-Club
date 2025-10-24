import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section>
      <h1>Bienvenido a iLevenN Club</h1>
      <p>Moda, bienestar y estilo en un solo lugar. Descubrí nuestras prendas exclusivas y viví la experiencia iLevenN.</p>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "30px"
      }}>
        <div style={{
          flex: "1",
          minWidth: "250px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
        }}>
          <h3>Moda exclusiva</h3>
          <p>Prendas seleccionadas para destacar tu estilo en cada temporada.</p>
          <Link to="/moda"><button>Explorar</button></Link>
        </div>

        <div style={{
          flex: "1",
          minWidth: "250px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
        }}>
          <h3>Reseñas reales</h3>
          <p>Conocé lo que dicen quienes ya son parte de iLevenN Club.</p>
          <Link to="/reseñas"><button>Ver reseñas</button></Link>
        </div>

        <div style={{
          flex: "1",
          minWidth: "250px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
        }}>
          <h3>Contacto directo</h3>
          <p>¿Tenés dudas o querés saber más? Estamos para ayudarte.</p>
          <Link to="/contacto"><button>Ir a contacto</button></Link>
        </div>
      </div>
    </section>
  );
}

export default Inicio;