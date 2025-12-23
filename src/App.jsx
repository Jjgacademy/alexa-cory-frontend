import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ChatBot from "./components/ChatBot"; // 👈 en pausa

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import EditarPerfil from "./pages/EditarPerfil";
import Cita from "./pages/Cita";
import InicioSesion from "./pages/InicioSesion";
import RecuperarPassword from "./pages/RecuperarPassword";
import PlanesPrecios from "./pages/PlanesPrecios"; // 👈 NUEVO

import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* ========= RUTAS PÚBLICAS ========= */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-password" element={<RecuperarPassword />} />
          <Route path="/planes" element={<PlanesPrecios />} /> {/* 👈 NUEVA RUTA */}

          {/* ========= RUTAS PRIVADAS ========= */}
          <Route
            path="/inicio"
            element={
              <PrivateRoute>
                <InicioSesion />
              </PrivateRoute>
            }
          />

          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            }
          />

          <Route
            path="/perfil/editar"
            element={
              <PrivateRoute>
                <EditarPerfil />
              </PrivateRoute>
            }
          />

          <Route
            path="/cita"
            element={
              <PrivateRoute>
                <Cita />
              </PrivateRoute>
            }
          />
        </Routes>

        {/* CHATBOT EN PAUSA */}
        {/* <ChatBot /> */}

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
