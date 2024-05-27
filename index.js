import 'dotenv/config';
import express from 'express';

import cuentaRouter from './router/cuentaRoute.js';
import transferRouter from './router/transferenciaRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/cuentas", cuentaRouter);
app.use("/api/v1/transfer", transferRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
