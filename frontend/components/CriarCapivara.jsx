import { useState } from 'react';
import { createCapivara } from '../services/capivaraService.js';

const CriarCapivara = ({ carregarCapivaras, setCriarCapivara }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [status_saude, setStatus] = useState('');
  const [habitat, setHabitat] = useState('');
  const [comportamento, setComportamento] = useState('');
  const [dieta, setDieta] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaCapivara = {
      nome,
      idade: Number(idade),
      peso: Number(peso),
      status_saude,
      habitat,
      comportamento,
      dieta,
      observacoes,
    };

    await createCapivara(novaCapivara);

    carregarCapivaras();
    setCriarCapivara(false);

  }

  return (
    <div className="overlay">
      <div className="form-container">
        <h2>Criar Nova Capivara</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />

          <label>Idade:</label>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />

          <label>Peso:</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} required />

          <label>Status:</label>
          <input type="text" value={status_saude} onChange={(e) => setStatus(e.target.value)} required />

          <label>Habitat:</label>
          <input type="text" value={habitat} onChange={(e) => setHabitat(e.target.value)} required />

          <label>Comportamento:</label>
          <textarea value={comportamento} onChange={(e) => setComportamento(e.target.value)} required />

          <label>Dieta:</label>
          <textarea value={dieta} onChange={(e) => setDieta(e.target.value)} />

          <label>Observações:</label>
          <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />

          <button className="btn button-ok mr-2" type="submit">Salvar</button>
          <button className="btn button-dell" onClick={() => setCriarCapivara(false)}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default CriarCapivara;
