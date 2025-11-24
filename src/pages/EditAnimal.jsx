import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function EditAnimal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [animal, setAnimal] = useState({
    nome: "",
    descricao: "",
    dataNascimento: "",
    especie: "",
    habitat: "",
    paisOrigem: "",
  });

  useEffect(() => {
    const animais = JSON.parse(localStorage.getItem("animais")) || [];
    const encontrado = animais.find((a) => a.id === Number(id));

    if (!encontrado) return navigate("/");

    setAnimal(encontrado);
  }, [id, navigate]);

  function handleChange(e) {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  }

  function salvarEdicao(e) {
    e.preventDefault();

    const animais = JSON.parse(localStorage.getItem("animais")) || [];

    const listaAtualizada = animais.map((a) =>
      a.id === Number(id) ? animal : a
    );

    localStorage.setItem("animais", JSON.stringify(listaAtualizada));

    navigate("/");
  }

    return (
    <div className="form-page">
      <div className="form-card">
        <h1>Editar Animal</h1>

        <form onSubmit={salvarEdicao}>
          <div className="form-row">
            <label>Nome</label>
            <input
              name="nome"
              value={animal.nome}
              onChange={handleChange}
              placeholder="Nome"
              required
            />
          </div>

          <div className="form-row">
            <label>Descrição</label>
            <textarea
              name="descricao"
              value={animal.descricao}
              onChange={handleChange}
              placeholder="Descrição"
            />
          </div>

          <div className="form-row">
            <label>Data de nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={animal.dataNascimento}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Espécie</label>
            <input
              name="especie"
              value={animal.especie}
              onChange={handleChange}
              placeholder="Espécie"
            />
          </div>

          <div className="form-row">
            <label>Habitat</label>
            <input
              name="habitat"
              value={animal.habitat}
              onChange={handleChange}
              placeholder="Habitat"
            />
          </div>

          <div className="form-row">
            <label>País de origem</label>
            <input
              name="paisOrigem"
              value={animal.paisOrigem}
              onChange={handleChange}
              placeholder="País de origem"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-form">
              Salvar alterações
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
