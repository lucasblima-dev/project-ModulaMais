import { useState, useEffect } from 'react';
import axios from 'axios';

const FormCapivara = ({ capivara, setCapivaraEditada, getCapivaras }) => {
  const [nome, setNome] = useState(capivara?.nome || '');
  const [idade, setIdade] = useState(capivara?.idade || '');
  const [peso, setPeso] = useState(capivara?.peso || '');
  const [status, setStatus] = useState('');
  const [habitat, setHabitat] = useState('');
  const [comportamento, setComportamento] = useState('');
  const [dieta, setDieta] = useState('');
  const [observacoes, setObservacoes] = useState('');

  useEffect(() => {
    if (capivara) {
      setNome(capivara.nome || '');
      setIdade(capivara.idade || '');
      setPeso(capivara.peso || '');
      setStatus(capivara.status || '');
      setHabitat(capivara.habitat || '');
      setComportamento(capivara.comportamento || '');
      setDieta(capivara.dieta || '');
      setObservacoes(capivara.observacoes || '');
    }
  }, [capivara]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const novaCapivara = {
      nome,
      idade,
      peso,
      status,
      habitat,
      comportamento,
      dieta,
      observacoes,
    };

    if (capivara) {
      await axios.put(`http://localhost:3001/capivara/${capivara.id}`, novaCapivara);
    } else {
      await axios.post('http://localhost:3001/capivara', novaCapivara);
    }

    getCapivaras();
    setCapivaraEditada(null);
  };

  const handleClose = () => {
    setCapivaraEditada(null);
  };

  if (!capivara) return null;

  return (
    <div className="overlay">
      <div className="form-container">
        <h2>Editar Capivara</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

          <label>Idade:</label>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

          <label>Peso:</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />

          <label>Status:</label>
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />

          <label>Habitat:</label>
          <input type="text" value={habitat} onChange={(e) => setHabitat(e.target.value)} />

          <label>Comportamento:</label>
          <textarea value={comportamento} onChange={(e) => setComportamento(e.target.value)} />

          <label>Dieta:</label>
          <textarea value={dieta} onChange={(e) => setDieta(e.target.value)} />

          <label>Observações:</label>
          <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />

          <button className="btn button-ok mr-2" type="submit">Salvar</button>
          <button className="btn button-dell" onClick={handleClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default FormCapivara;
