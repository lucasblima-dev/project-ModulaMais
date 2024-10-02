import { useState, useEffect } from 'react';
import { getCapivaras } from '../services/capivaraService.js';
import CapivaraTable from '../components/CapivaraTable.jsx';
import FormCapivara from '../components/FormCapivara.jsx';

function App() {
  const [capivaras, setCapivaras] = useState([]);
  const [capivaraEditada, setCapivaraEditada] = useState(null);

  const carregarCapivaras = async () => {
    const response = await getCapivaras();
    setCapivaras(response.data);
  };

  useEffect(() => {
    carregarCapivaras();
  }, []);

  return (
    <div className="container">
      <h1>Capivaras</h1>
      <CapivaraTable
        capivaras={capivaras}
        setCapivaraEditada={setCapivaraEditada}
        getCapivaras={carregarCapivaras}
      />
      <FormCapivara
        capivara={capivaraEditada}
        setCapivaraEditada={setCapivaraEditada}
        getCapivaras={carregarCapivaras}
      />
    </div>
  );
};

export default App;
