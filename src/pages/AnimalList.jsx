import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AnimalList() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const animaisSalvos = JSON.parse(localStorage.getItem("animais")) || [];
    setAnimais(animaisSalvos);
  }, []);

  function excluirAnimal(id) {
    const novaLista = animais.filter((animal) => animal.id !== id);
    setAnimais(novaLista);
    localStorage.setItem("animais", JSON.stringify(novaLista));
  }

  return (
    <div className="container">
      <h1>Lista de Animais</h1>

      <p>
        <Link to="/cadastro" className="link-primary">
          Cadastrar novo animal
        </Link>
      </p>

      {animais.length === 0 ? (
        <p>Nenhum animal cadastrado ainda...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Espécie</th>
              <th>Habitat</th>
              <th>País de origem</th>
              <th>Data nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {animais.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.nome}</td>
                <td>{animal.especie}</td>
                <td>{animal.habitat}</td>
                <td>{animal.paisOrigem}</td>
                <td>{animal.dataNascimento}</td>
                <td className="actions-cell">
  <button 
    className="btn-editar"
    onClick={() => window.location.href = `/editar/${animal.id}`}
  >
    ✏ Editar
  </button>

  <button 
    className="btn-excluir"
    onClick={() => excluirAnimal(animal.id)}
  >
    Excluir
  </button>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
