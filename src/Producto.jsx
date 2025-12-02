import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductosContext } from "./ProductosContext";
import EditarProducto from "./EditarProducto";
import styled from "styled-components";
import { FaShoppingCart, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
  word-wrap: break-word;
  overflow-wrap: anywhere;
`;

const Price = styled.p`
  font-weight: bold;
  color: #007bff;
  margin-bottom: 8px;
`;

const Description = styled.p`
  flex-grow: 1;
  font-size: 0.9rem;
  color: #555;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  margin-bottom: 15px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
`;

const Button = styled.button`
  flex: 1;
  min-width: 100px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.bg || "#333"};
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;

function Producto({ producto, onAgregar }) {
  const { eliminarProducto } = useContext(ProductosContext);
  const [editando, setEditando] = useState(false);

  const handleEliminar = () => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      eliminarProducto(producto.id);
      toast.success("Producto eliminado correctamente ✅");
    }
  };

  return (
    <Card>
      <div>
        <Link to={`/producto/${producto.id}`}>
          <Title>{producto.nombre}</Title>
        </Link>
        <Price>${producto.precio}</Price>
        <Description>{producto.descripcion}</Description>
      </div>

      <ButtonGroup>
        <Button onClick={() => onAgregar(producto)} aria-label="Agregar al carrito">
          <FaShoppingCart /> Agregar
        </Button>
        <Button onClick={() => setEditando(true)} bg="#007bff" aria-label="Editar producto">
          <FaEdit /> Editar
        </Button>
        <Button onClick={handleEliminar} bg="red" aria-label="Eliminar producto">
          <FaTrash /> Eliminar
        </Button>
      </ButtonGroup>

      {editando && <EditarProducto producto={producto} onClose={() => setEditando(false)} />}
    </Card>
  );
}

export default Producto;