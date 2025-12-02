import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { FaTshirt, FaStar, FaEnvelope } from "react-icons/fa";

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

function Inicio() {
  return (
    <section className="container py-4">
      <Helmet>
        <title>iLevenN - Inicio</title>
        <meta name="description" content="Bienvenido a iLevenN Club: moda, bienestar y estilo en un solo lugar." />
      </Helmet>

      <h1 className="mb-3">Bienvenido a iLevenN Club</h1>
      <p>Moda, bienestar y estilo en un solo lugar. Descubrí nuestras prendas exclusivas y viví la experiencia iLevenN.</p>

      <div className="row g-4 mt-4">
        <div className="col-12 col-md-4">
          <Card>
            <Title><FaTshirt /> Moda exclusiva</Title>
            <p>Prendas seleccionadas para destacar tu estilo.</p>
            <Link to="/moda">
              <button className="btn btn-dark w-100">Explorar</button>
            </Link>
          </Card>
        </div>

        <div className="col-12 col-md-4">
          <Card>
            <Title><FaStar /> Reseñas reales</Title>
            <p>Conocé lo que dicen quienes ya son parte de iLevenN Club.</p>
            <Link to="/reseñas">
              <button className="btn btn-dark w-100">Ver reseñas</button>
            </Link>
          </Card>
        </div>

        <div className="col-12 col-md-4">
          <Card>
            <Title><FaEnvelope /> Contacto directo</Title>
            <p>¿Tenés dudas o querés saber más? Estamos para ayudarte.</p>
            <Link to="/contacto">
              <button className="btn btn-dark w-100">Ir a contacto</button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Inicio;