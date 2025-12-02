import { createContext, useState, useEffect } from "react";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // NUEVO

  const API_URL = "https://692e5b3d91e00bafccd39b84.mockapi.io/productos";

  const fetchProductos = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al cargar productos");
      const data = await res.json();
      setProductos(data);
      setSuccess("Productos cargados correctamente ✅");
    } catch (err) {
      setError("No se pudieron cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  const agregarProducto = async (nuevo) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevo),
      });
      if (!res.ok) throw new Error("Error al agregar producto");
      const creado = await res.json();
      setProductos([...productos, creado]);
      setSuccess("Producto agregado correctamente ✅");
    } catch {
      setError("No se pudo agregar el producto");
    }
  };

  const editarProducto = async (id, datos) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) throw new Error("Error al editar producto");
      const actualizado = await res.json();
      setProductos(productos.map((p) => (p.id === id ? actualizado : p)));
      setSuccess("Producto actualizado correctamente ✅");
    } catch {
      setError("No se pudo editar el producto");
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar producto");
      setProductos(productos.filter((p) => p.id !== id));
      setSuccess("Producto eliminado correctamente ✅");
    } catch {
      setError("No se pudo eliminar el producto");
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        loading,
        error,
        success, // NUEVO
        agregarProducto,
        editarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};