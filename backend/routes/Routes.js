import { Router } from 'express';

const router = Router();

import {
  getAllCapivaras,
  getCapivaraByHabitat,
  createCapivara,
  updateCapivara,
  deleteCapivara
} from '../controllers/capivaraController.js';

router.get('/capivaras', getAllCapivaras);
router.get('/capivaras/habitat/', getCapivaraByHabitat);

router.post('/capivara', createCapivara);

router.put('/capivara/:id', updateCapivara);

router.delete('/capivara/:id', deleteCapivara);

export default router;
