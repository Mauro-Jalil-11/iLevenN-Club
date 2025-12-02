import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FaUser, FaCommentDots } from "react-icons/fa";
import { toast } from "react-toastify";

const FormWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

function Reseñas() {
  const [reseñas, setReseñas] = useState([
    { autor: "Lucía", texto: "¡Me encantó la ropa personalizada! Muy profesional." },
    { autor: "Carlos", texto: "iLevenN Club me ayudó a vestir con elegancia" },
    { autor: "Sofía", texto: "Excelente atención y seguimiento. ¡Recomendado!" }
  ]);

  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");

  const agregarReseña = () => {
    if (autor.trim() === "" || texto.trim() === "") {
      toast.error("Completa todos los campos antes de enviar");
      return;
    }

    const nuevaReseña = { autor, texto };
    setReseñas((prevReseñas) => [...prevReseñas, nuevaReseña]);

    setAutor("");
    setTexto("");
    toast.success("Reseña enviada correctamente ✅");
  };

  const reseñaAleatoria =
    reseñas.length > 0
      ? reseñas[Math.floor(Math.random() * reseñas.length)]
      : null;

  return (
    <section className="container py-4">
      <Helmet>
        <title>iLevenN - Reseñas</title>
        <meta name="description" content="Descubre lo que opinan los clientes de iLevenN Club." />
      </Helmet>

      <h2 className="mb-4">Reseñas — iLevenN Club</h2>

      {reseñaAleatoria && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Reseña destacada</h5>
            <p><FaUser /> <strong>{reseñaAleatoria.autor}</strong> dijo:</p>
            <p><FaCommentDots /> "{reseñaAleatoria.texto}"</p>
          </div>
        </div>
      )}

      <h3>¿Querés dejar tu reseña?</h3>
      <FormWrapper>
        <Input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Tu nombre"
          aria-label="Campo para tu nombre"
        />
        <TextArea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Tu reseña"
          rows="3"
          aria-label="Campo para tu reseña"
        />
        <Button onClick={agregarReseña}>Enviar reseña</Button>
      </FormWrapper>

      <hr className="my-4" />

      <h3>Todas las reseñas:</h3>
      {reseñas.length > 0 ? (
        <div className="row g-3">
          {reseñas.map((item, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><FaUser /> <strong>{item.autor}</strong></p>
                  <p><FaCommentDots /> {item.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay reseñas aún.</p>
      )}
    </section>
  );
}

export default Reseñas;