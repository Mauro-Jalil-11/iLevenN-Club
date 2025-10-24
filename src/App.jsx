import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Inicio from "./Inicio";
import Moda from "./Moda";
import Carrito from "./Carrito";
import DetalleProducto from "./DetalleProducto";
import FAQ from "./FAQ";
import Reseñas from "./Reseñas";
import Contacto from "./Contacto";
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/moda" element={<Moda onAgregar={agregarAlCarrito} />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reseñas" element={<Reseñas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Carrito items={carrito} onEliminar={eliminarDelCarrito} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;