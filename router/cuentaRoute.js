import { Router } from 'express';
import { CuentaController } from '../controllers/cuentaController.js';

const router = Router();

router.get("/:id", CuentaController.getCuenta);

export default router;
