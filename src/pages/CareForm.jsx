import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CareForm() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [frequencia, setFrequencia] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const novoCuidado = {
      id: Date.now(),
      nome,
      descricao,
      frequencia,
    };

    const cuidadosSalvos = JSON.parse(localStorage.getItem("cuidados")) || [];
    cuidadosSalvos.push(novoCuidado);
    localStorage.setItem("cuidados", JSON.stringify(cuidadosSalvos));

    navigate("/cuidados");
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Cadastrar Cuidado</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Nome do cuidado</label>
            <input
              placeholder="Ex: Alimentação, Vacinação..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label>Descrição</label>
            <textarea
              placeholder="Descreva o cuidado"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Frequência</label>
            <select
              value={frequencia}
              onChange={(e) => setFrequencia(e.target.value)}
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
              Salvar
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
