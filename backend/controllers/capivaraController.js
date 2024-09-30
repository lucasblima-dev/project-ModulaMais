import Capivara from '../models/Capivara.js';

export const getAllCapivaras = async (req, res) => {
  try {
    const capivara = await Capivara.findAll();
    res.json(capivara);
  } catch (err) {
    res.status(500).json({ err: 'Erro ao buscar as Capivaras.' });
  }
};

export const getCapivaraByHabitat = async (req, res) => {
  const { habitat } = req.params;

  try {
    const capivaras = await Capivara.findAll({ where: { habitat } });
    res.json(capivaras)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as Capivaras por habitat.' });
  }
};

export const createCapivara = async (req, res) => {
  try {
    const capivara = await Capivara.create(req.body);
    res.status(201).json(capivara);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar Capivara.' });
  }
};

export const updateCapivara = async (req, res) => {
  const { id } = req.params;

  try {
    const capivara = await Capivara.findByPk(id);

    if (!capivara) return res.status(404).json({ error: 'Capivara não encontrada' });

    await capivara.update(req.body);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar a Capivara.' });
  }
};

export const deleteCapivara = async (req, res) => {
  const { id } = req.params;

  try {
    const capivara = await Capivara.findByPk(id);

    if (!capivara) return res.status(404).json({ error: 'Capivara não encontrada' });

    await capivara.destroy();
    res.json({ message: 'Capivara deletada com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar a Capivara.' });
  }
};