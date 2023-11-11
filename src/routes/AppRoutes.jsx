import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Pokemones from "../pages/Pokemones";
import NotFound from "../pages/NotFound";
import Detalle from "../pages/Detalle";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemones" element={<Pokemones />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/pokemones/:pokemones" element={<Detalle />} />
    </Routes>
  );
}

export default AppRoutes;
