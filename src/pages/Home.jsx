import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Zoo Manager</h1>
      <p>Sistema de gerenciamento de animais e cuidados.</p>

      <p>
        <Link to="/animais" className="btn">
  Ver Animais
</Link>

<Link to="/cuidados" className="btn">
  Ver Cuidados
</Link>

      </p>
    </div>
  );
}
