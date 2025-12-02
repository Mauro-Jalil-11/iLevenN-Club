import { useState } from "react";
import { toast } from "react-toastify";

function AgregarProducto({ onProductoAgregado }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      toast.error("El nombre es obligatorio");
      return;
    }
    if (Number(precio) <= 0) {
      toast.error("El precio debe ser mayor a 0");
      return;
    }
    if (descripcion.trim().length < 10) {
      toast.error("La descripción debe tener al menos 10 caracteres");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("https://692e5b3d91e00bafccd39b84.mockapi.io/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          precio: Number(precio),
          descripcion: descripcion.trim()
        })
      });
      if (!response.ok) throw new Error("Error al agregar producto");
      const nuevoProducto = await response.json();
      onProductoAgregado(nuevoProducto);
      toast.success("✅ Producto agregado correctamente");
      setNombre("");
      setPrecio("");
      setDescripcion("");
    } catch {
      toast.error("Hubo un problema con la API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 p-3 border rounded">
      <h2>Agregar Producto</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <button type="submit" disabled={loading} className="btn btn-dark">
        {loading ? "Agregando..." : "Agregar"}
      </button>
    </form>
  );
}

export default AgregarProducto;