import { useState } from "react";

function FAQ() {
  const [preguntas, setPreguntas] = useState([
    { pregunta: "¿Cómo hago un pedido?", respuesta: "Seleccioná un producto y hacé clic en 'Agregar al carrito'." },
    { pregunta: "¿Cuáles son los métodos de pago?", respuesta: "Aceptamos tarjetas, transferencias y Mercado Pago." },
    { pregunta: "¿Hacen envíos?", respuesta: "Sí, realizamos envíos a todo el país." }
  ]);

  const [nuevaPregunta, setNuevaPregunta] = useState("");

  const agregarPregunta = () => {
    if (nuevaPregunta.trim() === "") return;
    const nueva = {
      pregunta: nuevaPregunta,
      respuesta: "Gracias por tu consulta. Pronto la responderemos."
    };
    setPreguntas([...preguntas, nueva]);
    setNuevaPregunta("");
  };

  const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];

  return (
    <section>
      <h2>Preguntas Frecuentes</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Pregunta aleatoria:</h3>
        <p><strong>{preguntaAleatoria.pregunta}</strong></p>
        <p>{preguntaAleatoria.respuesta}</p>
      </div>

      <div>
        <h3>¿Querés hacer una nueva pregunta?</h3>
        <input
          type="text"
          value={nuevaPregunta}
          onChange={(e) => setNuevaPregunta(e.target.value)}
          placeholder="Escribí tu pregunta..."
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={agregarPregunta}>Enviar</button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h3>Todas las preguntas:</h3>
      <ul>
        {preguntas.map((item, index) => (
          <li key={index}>
            <strong>{item.pregunta}</strong><br />
            {item.respuesta}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;