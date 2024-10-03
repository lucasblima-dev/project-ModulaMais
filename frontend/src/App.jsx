import { useState, useEffect } from 'react';
import { getCapivaras } from '../services/capivaraService.js';
import CapivaraTable from '../components/CapivaraTable.jsx';
import FormCapivara from '../components/FormCapivara.jsx';
import CriarCapivara from '../components/CriarCapivara.jsx';

function App() {
  const [capivaras, setCapivaras] = useState([]);
  const [capivaraEditada, setCapivaraEditada] = useState(null);
  const [habitatFilter, setHabitatFilter] = useState('');
  const [criarCapivara, setCriarCapivara] = useState(false);
  const [dataAtt, setDataAtt] = useState('');


  const carregarCapivaras = async () => {
    const response = await getCapivaras();
    setCapivaras(response.data);
    setDataAtt(new Date().toLocaleString());
  };

  useEffect(() => {
    carregarCapivaras();
  }, []);

  const capivarasFiltradas = capivaras.filter(capivara =>
    capivara.habitat.toLowerCase().includes(habitatFilter.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header mb-3">
        <h2>Lista de Capivaras</h2>
        <span className="ml-5 font-weight-bold">Data da última atualização: {dataAtt}</span>
      </div>
      <div className="form-inline d-flex justify-content-around mb-5">
        <input
          type="text"
          placeholder="Pesquisar por habitat"
          className="input-search form-control mr-2"
          value={habitatFilter}
          onChange={(e) => setHabitatFilter(e.target.value)}
        />
        <button
          onClick={() => setCriarCapivara(true)}
          className="btn-form btn btn-success mb-2"
        >
          Adicionar nova Capivara
        </button>
      </div>
      {capivarasFiltradas.length > 0 ? (
        <CapivaraTable
          capivaras={capivarasFiltradas}
          setCapivaraEditada={setCapivaraEditada}
          getCapivaras={carregarCapivaras}
        />
      ) : (
        <h1 className="display-3">Nenhum resultado encontrado para esse habitat</h1>
      )}
      <FormCapivara
        capivara={capivaraEditada}
        setCapivaraEditada={setCapivaraEditada}
        getCapivaras={carregarCapivaras}
        carregarCapivaras={carregarCapivaras}
      />
      {criarCapivara && (
        <CriarCapivara
          carregarCapivaras={carregarCapivaras}
          setCriarCapivara={setCriarCapivara}
        />
      )}
    </div>
  );
}

export default App;
