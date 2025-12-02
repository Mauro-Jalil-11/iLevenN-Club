import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Inicio from "./Inicio";
import Moda from "./Moda";
import Carrito from "./Carrito";
import DetalleProducto from "./DetalleProducto";
import FAQ from "./FAQ";
import Reseñas from "./Reseñas";
import Contacto from "./Contacto";
import Login from "./Login";
import RutaProtegida from "./RutaProtegida";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/moda" element={<Moda />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reseñas" element={<Reseñas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/carrito"
            element={
              <RutaProtegida>
                <Carrito />
              </RutaProtegida>
            }
          />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;