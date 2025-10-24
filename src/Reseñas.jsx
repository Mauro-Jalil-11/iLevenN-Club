import { useState } from "react";

function Reseñas() {
  const [reseñas, setReseñas] = useState([
    { autor: "Lucía", texto: "¡Me encantó la ropa personalizada! Muy profesional." },
    { autor: "Carlos", texto: "iLevenN Club me ayudó a vestir con elegancia" },
    { autor: "Sofía", texto: "Excelente atención y seguimiento. ¡Recomendado!" }
  ]);

  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");

  const agregarReseña = () => {
    if (autor.trim() === "" || texto.trim() === "") return;

    const nuevaReseña = { autor, texto };
    setReseñas((prevReseñas) => [...prevReseñas, nuevaReseña]);

    setAutor("");
    setTexto("");
  };

  const reseñaAleatoria =
    reseñas.length > 0
      ? reseñas[Math.floor(Math.random() * reseñas.length)]
      : null;

  return (
    <section>
      <h2>Reseñas — iLevenN Club</h2>

      {reseñaAleatoria && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Reseña destacada:</h3>
          <p><strong>{reseñaAleatoria.autor}</strong> dijo:</p>
          <p>"{reseñaAleatoria.texto}"</p>
        </div>
      )}

      <div>
        <h3>¿Querés dejar tu reseña?</h3>
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Tu nombre"
          style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
        /><br />
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Tu reseña"
          rows="3"
          style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
        /><br />
        <button onClick={agregarReseña}>Enviar reseña</button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h3>Todas las reseñas:</h3>
      {reseñas.length > 0 ? (
        <ul>
          {reseñas.map((item, index) => (
            <li key={index}>
              <strong>{item.autor}</strong>: {item.texto}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay reseñas aún.</p>
      )}
    </section>
  );
}

export default Reseñas;