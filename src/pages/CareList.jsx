import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CareList() {
  const [cuidados, setCuidados] = useState([]);

  useEffect(() => {
    const cuidadosSalvos = JSON.parse(localStorage.getItem("cuidados")) || [];
    setCuidados(cuidadosSalvos);
  }, []);

  function excluirCuidado(id) {
    const novaLista = cuidados.filter((cuidado) => cuidado.id !== id);
    setCuidados(novaLista);
    localStorage.setItem("cuidados", JSON.stringify(novaLista));
  }

  return (
    <div className="container">
      <h1>Lista de Cuidados</h1>

      <p>
        <Link to="/cuidados/novo" className="link-primary">

          Cadastrar novo cuidado
        </Link>
      </p>

      {cuidados.length === 0 ? (
        <p>Nenhum cuidado cadastrado ainda...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nome do cuidado</th>
              <th>Descrição</th>
              <th>Frequência</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cuidados.map((cuidado) => (
              <tr key={cuidado.id}>
                <td>{cuidado.nome}</td>
                <td>{cuidado.descricao}</td>
                <td>{cuidado.frequencia}</td>
                <td className="actions-cell">
                  <button
                    className="btn-editar"
                    onClick={() =>
                      (window.location.href = `/cuidados/editar/${cuidado.id}`)
                    }
                  >
                    ✏ Editar
                  </button>

                  <button
                    className="btn-excluir"
                    onClick={() => excluirCuidado(cuidado.id)}
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
