import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./CarritoContext";
import { AuthProvider } from "./AuthContext";
import { ProductosProvider } from "./ProductosContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/iLevenN-Club">
      <AuthProvider>
        <CarritoProvider>
          <ProductosProvider>
            <App />
          </ProductosProvider>
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
