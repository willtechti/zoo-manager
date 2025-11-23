import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimalList from "./pages/AnimalList";
import AnimalForm from "./pages/AnimalForm";
import EditAnimal from "./pages/EditAnimal";
import CareList from "./pages/CareList";
import CareForm from "./pages/CareForm";
import EditCare from "./pages/EditCare";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
  {/* Página inicial */}
  <Route path="/" element={<Home />} />

  {/* Animais */}
  <Route path="/animais" element={<AnimalList />} />
  <Route path="/cadastro" element={<AnimalForm />} />
  <Route path="/editar/:id" element={<EditAnimal />} />

  {/* Cuidados */}
  <Route path="/cuidados" element={<CareList />} />
  <Route path="/cuidados/novo" element={<CareForm />} />
  <Route path="/cuidados/editar/:id" element={<EditCare />} />
</Routes>

    </BrowserRouter>
  );
}
