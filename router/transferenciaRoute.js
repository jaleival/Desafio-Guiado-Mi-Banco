import { Router } from 'express';
import { TransferenciaController } from '../controllers/transferenciaController.js';

const router = Router()

router.get('/:id', TransferenciaController.getTransferenciasById)
router.post('/', TransferenciaController.createTransfer)

export default router;