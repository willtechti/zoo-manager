import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AnimalForm() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [especie, setEspecie] = useState("");
  const [habitat, setHabitat] = useState("");
  const [paisOrigem, setPaisOrigem] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const novoAnimal = {
      id: Date.now(),
      nome,
      descricao,
      dataNascimento,
      especie,
      habitat,
      paisOrigem,
    };

    const animaisSalvos = JSON.parse(localStorage.getItem("animais")) || [];
    animaisSalvos.push(novoAnimal);
    localStorage.setItem("animais", JSON.stringify(animaisSalvos));

    navigate("/");
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Cadastrar Animal</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Nome</label>
            <input
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label>Descrição</label>
            <textarea
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Data de nascimento</label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Espécie</label>
            <input
              placeholder="Espécie"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Habitat</label>
            <input
              placeholder="Habitat"
              value={habitat}
              onChange={(e) => setHabitat(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>País de origem</label>
            <input
              placeholder="País de origem"
              value={paisOrigem}
              onChange={(e) => setPaisOrigem(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-form">
              Salvar
            </button>
          </div>
        </form>

        <Link to="/" className="link-voltar">
          Voltar para lista
        </Link>
      </div>
    </div>
  );
}
