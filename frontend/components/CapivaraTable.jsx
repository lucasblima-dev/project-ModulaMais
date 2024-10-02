//import axios from 'axios';
import { deleteCapivara } from '../services/capivaraService.js';

const CapivaraTable = ({ capivaras, setCapivaraEditada, getCapivaras }) => {

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta capivara?')) {
      await deleteCapivara(id);
      getCapivaras();
    }
  };

  return (
    <table className="table table-responsive bg-white exemplo">
      <thead className="bg-transparent text-center text-shadow">
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Peso</th>
          <th>Status</th>
          <th>Habitat</th>
          <th>Comportamento</th>
          <th>Dieta</th>
          <th>Observações</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody className="text-center bg-light">
        {capivaras.map(capivara => (
          <tr key={capivara.id}>
            <td>{capivara.nome}</td>
            <td>{capivara.idade}</td>
            <td>{capivara.peso}kg</td>
            <td>{capivara.status_saude}</td>
            <td>{capivara.habitat}</td>
            <td>{capivara.comportamento}</td>
            <td>{capivara.dieta}</td>
            <td>{capivara.observacoes}</td>
            <td className="d-flex">
              <button onClick={() => setCapivaraEditada(capivara)}>
                <span className="material-icons">edit</span>
              </button>
              <button onClick={() => handleDelete(capivara.id)}>
                <span className="material-icons">delete</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CapivaraTable;
