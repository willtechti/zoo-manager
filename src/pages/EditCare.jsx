import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function EditCare() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cuidado, setCuidado] = useState({
    nome: "",
    descricao: "",
    frequencia: "",
  });

  useEffect(() => {
    const cuidados = JSON.parse(localStorage.getItem("cuidados")) || [];
    const encontrado = cuidados.find((c) => c.id === Number(id));

    if (!encontrado) {
      navigate("/cuidados");
      return;
    }

    setCuidado(encontrado);
  }, [id, navigate]);

  function handleChange(e) {
    setCuidado({ ...cuidado, [e.target.name]: e.target.value });
  }

  function salvarEdicao(e) {
    e.preventDefault();

    const cuidados = JSON.parse(localStorage.getItem("cuidados")) || [];

    const listaAtualizada = cuidados.map((c) =>
      c.id === Number(id) ? cuidado : c
    );

    localStorage.setItem("cuidados", JSON.stringify(listaAtualizada));

    navigate("/cuidados");
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Editar Cuidado</h1>

        <form onSubmit={salvarEdicao}>
          <div className="form-row">
            <label>Nome do cuidado</label>
            <input
              name="nome"
              value={cuidado.nome}
              onChange={handleChange}
              placeholder="Nome do cuidado"
              required
            />
          </div>

          <div className="form-row">
            <label>Descrição</label>
            <textarea
              name="descricao"
              value={cuidado.descricao}
              onChange={handleChange}
              placeholder="Descrição"
            />
          </div>

          <div className="form-row">
            <label>Frequência</label>
            <select
              name="frequencia"
              value={cuidado.frequencia}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Diária">Diária</option>
              <option value="Semanal">Semanal</option>
              <option value="Mensal">Mensal</option>
              <option value="Trimestral">Trimestral</option>
              <option value="Anual">Anual</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-form">
              Salvar alterações
            </button>
          </div>
        </form>

        <Link to="/cuidados" className="link-voltar">
          Voltar para lista de cuidados
        </Link>
      </div>
    </div>
  );
}
