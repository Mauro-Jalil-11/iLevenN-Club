import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const FormWrapper = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !mensaje.trim()) {
      toast.error("Completa todos los campos antes de enviar");
      return;
    }
    toast.success("Mensaje enviado correctamente ✅");
    setNombre("");
    setMensaje("");
  };

  return (
    <section className="container py-4">
      <Helmet>
        <title>iLevenN - Contacto</title>
        <meta name="description" content="Contacta a iLevenN Club por email, WhatsApp o redes sociales." />
      </Helmet>

      <h2 className="mb-3">Contacto — iLevenN Club</h2>
      <p>Gracias por tu interés en iLevenN Club. Si querés saber más sobre nuestra ropa podés encontrarnos en los siguientes canales:</p>

      <ul className="list-unstyled mb-4">
        <li><FaEnvelope /> <strong>Email:</strong> contacto@ilevennclub.com</li>
        <li><FaWhatsapp /> <strong>WhatsApp:</strong> +54 9 11 1234-5678</li>
        <li><FaInstagram /> <strong>Instagram:</strong> @ilevenn.club</li>
        <li><FaFacebook /> <strong>Facebook:</strong> facebook.com/ilevennclub</li>
        <li><FaMapMarkerAlt /> <strong>Ubicación:</strong> Buenos Aires, Argentina</li>
      </ul>

      <p>Respondemos consultas dentro de las 24 horas. ¡Gracias por formar parte de iLevenN Club!</p>

      <h3>Envíanos tu mensaje</h3>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          aria-label="Campo para tu nombre"
        />
        <TextArea
          placeholder="Tu mensaje"
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          aria-label="Campo para tu mensaje"
        />
        <Button type="submit">Enviar</Button>
      </FormWrapper>
    </section>
  );
}

export default Contacto;