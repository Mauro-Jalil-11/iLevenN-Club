import { useContext, useState, useMemo } from "react";
import Producto from "./Producto";
import { ProductosContext } from "./ProductosContext";
import AgregarProducto from "./AgregarProducto";
import { Helmet } from "react-helmet";

function Productos({ onAgregar }) {
  const { productos, loading, error, success, agregarProducto } = useContext(ProductosContext);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  if (loading) return <p>Cargando productos...</p>;

  const productosFiltrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    if (!q) return productos;
    return productos.filter((p) => {
      const nombre = String(p.nombre || p.title || "").toLowerCase();
      const descripcion = String(p.descripcion || p.description || "").toLowerCase();
      const categoria = String(p.categoria || p.category || "").toLowerCase();
      return (
        nombre.includes(q) ||
        descripcion.includes(q) ||
        categoria.includes(q)
      );
    });
  }, [busqueda, productos]);

  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  const productosPagina = productosFiltrados.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  return (
    <section className="container py-4">
      <Helmet>
        <title>iLevenN - Productos de Moda</title>
        <meta name="description" content="Descubre los mejores productos de moda disponibles en iLevenN." />
      </Helmet>

      <h2 className="mb-3">Productos disponibles</h2>

      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}

      <div className="mb-4">
        <AgregarProducto onProductoAgregado={agregarProducto} />
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Buscar por nombre, descripción o categoría..."
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            setPaginaActual(1);
          }}
          className="form-control"
          aria-label="Barra de búsqueda de productos"
        />
      </div>

      <div className="row g-3">
        {productosPagina.length > 0 ? (
          productosPagina.map((p) => (
            <div key={p.id} className="col-12 col-sm-6 col-lg-4">
              <Producto producto={p} onAgregar={onAgregar} />
            </div>
          ))
        ) : (
          <p>No se encontraron productos para “{busqueda}”.</p>
        )}
      </div>

      {totalPaginas > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPaginas }, (_, i) => (
              <li
                key={i}
                className={`page-item ${paginaActual === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setPaginaActual(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
}

export default Productos;