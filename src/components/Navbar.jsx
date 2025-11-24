import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Zoo Manager</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/animais">Animais</Link></li>
        <li><Link to="/cadastro">Cadastrar Animal</Link></li>
        <li><Link to="/cuidados">Cuidados</Link></li>
      </ul>
    </nav>
  );
}
