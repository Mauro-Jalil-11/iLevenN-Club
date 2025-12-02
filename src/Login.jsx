import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      toast.success("Inicio de sesión exitoso ✅");
      navigate("/carrito");
    } else {
      toast.error("Credenciales incorrectas ❌");
    }
  };

  return (
    <Wrapper>
      <Helmet>
        <title>iLevenN - Login</title>
        <meta name="description" content="Accede a tu cuenta en iLevenN Club para gestionar tu carrito y pedidos." />
      </Helmet>

      <Form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div className="input-group">
          <span className="input-group-text"><FaUser /></span>
          <Input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Campo usuario"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text"><FaLock /></span>
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Campo contraseña"
          />
        </div>
        <Button type="submit">Ingresar</Button>
      </Form>
    </Wrapper>
  );
}

export default Login;