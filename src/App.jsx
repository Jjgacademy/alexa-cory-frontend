import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Cita from "./pages/Cita";


function Placeholder({ title }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/cita" element={<Cita />} />
      </Routes>

      {/* FOOTER SIEMPRE ABAJO */}
      <Footer />
    </BrowserRouter>
  );
}
