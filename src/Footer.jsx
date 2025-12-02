import styled from "styled-components";
import { FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.2rem;

  a {
    color: #fff;
    transition: color 0.2s ease;
    &:hover {
      color: #007bff;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterContent>
          <p>&copy; 2025 iLevenN. Todos los derechos reservados.</p>

          <SocialLinks>
            <a href="mailto:contacto@ilevennclub.com" aria-label="Enviar correo a iLevenN">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/ilevenn.club" target="_blank" rel="noopener noreferrer" aria-label="Instagram de iLevenN">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/ilevennclub" target="_blank" rel="noopener noreferrer" aria-label="Facebook de iLevenN">
              <FaFacebook />
            </a>
            <span><FaMapMarkerAlt /> Buenos Aires, Argentina</span>
          </SocialLinks>
        </FooterContent>
      </div>
    </FooterWrapper>
  );
}

export default Footer;