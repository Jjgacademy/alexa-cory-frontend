import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ChatBot from "./components/ChatBot"; // 👈 en pausa

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Cita from "./pages/Cita";
import InicioSesion from "./pages/InicioSesion";

import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/cita" element={<Cita />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/inicio" element={<InicioSesion />} />
        </Routes>

        {/* CHATBOT EN PAUSA */}
        {/* <ChatBot /> */}

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
