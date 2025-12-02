import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FaQuestionCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const FormWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 8px;
  flex: 1;
  min-width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

function FAQ() {
  const [preguntas, setPreguntas] = useState([
    { pregunta: "¿Cómo hago un pedido?", respuesta: "Seleccioná un producto y hacé clic en 'Agregar al carrito'." },
    { pregunta: "¿Cuáles son los métodos de pago?", respuesta: "Aceptamos tarjetas, transferencias y Mercado Pago." },
    { pregunta: "¿Hacen envíos?", respuesta: "Sí, realizamos envíos a todo el país." }
  ]);

  const [nuevaPregunta, setNuevaPregunta] = useState("");

  const agregarPregunta = () => {
    if (nuevaPregunta.trim() === "") {
      toast.error("La pregunta no puede estar vacía");
      return;
    }
    const nueva = {
      pregunta: nuevaPregunta,
      respuesta: "Gracias por tu consulta. Pronto la responderemos."
    };
    setPreguntas([...preguntas, nueva]);
    setNuevaPregunta("");
    toast.success("Pregunta enviada correctamente ✅");
  };

  return (
    <section className="container py-4">
      <Helmet>
        <title>iLevenN - Preguntas Frecuentes</title>
        <meta name="description" content="Encuentra respuestas rápidas a tus dudas sobre iLevenN." />
      </Helmet>

      <h2 className="mb-4"><FaQuestionCircle /> Preguntas Frecuentes</h2>

      <div className="accordion mb-4" id="faqAccordion">
        {preguntas.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {item.pregunta}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {item.respuesta}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>¿Querés hacer una nueva pregunta?</h3>
      <FormWrapper>
        <Input
          type="text"
          value={nuevaPregunta}
          onChange={(e) => setNuevaPregunta(e.target.value)}
          placeholder="Escribí tu pregunta..."
          aria-label="Campo para nueva pregunta"
        />
        <Button onClick={agregarPregunta}>Enviar</Button>
      </FormWrapper>
    </section>
  );
}

export default FAQ;