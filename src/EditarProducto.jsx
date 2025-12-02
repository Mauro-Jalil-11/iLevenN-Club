import { useState, useContext } from "react";
import { ProductosContext } from "./ProductosContext";

function EditarProducto({ producto, onClose }) {
  const { editarProducto } = useContext(ProductosContext);
  const [nombre, setNombre] = useState(producto.nombre);
  const [precio, setPrecio] = useState(producto.precio);
  const [descripcion, setDescripcion] = useState(producto.descripcion || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError("El nombre es obligatorio");
      return;
    }
    if (Number(precio) <= 0) {
      setError("El precio debe ser mayor a 0");
      return;
    }
    if (descripcion.trim().length < 10) {
      setError("La descripción debe tener al menos 10 caracteres");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await editarProducto(producto.id, {
        nombre: nombre.trim(),
        precio: Number(precio),
        descripcion: descripcion.trim(),
      });
      setSuccess("✅ Producto actualizado correctamente");
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch {
      setError("Hubo un problema al editar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px"
        }}
      >
        <h3>Editar Producto</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" disabled={loading}>
            {loading ? "Guardando..." : "Guardar"}
          </button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default EditarProducto;