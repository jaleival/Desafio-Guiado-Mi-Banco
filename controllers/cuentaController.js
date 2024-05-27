import { CuentaModel } from '../models/cuentaModel.js';

const getCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const cuenta = await CuentaModel.findOneById(id);
    return res.json(cuenta);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const CuentaController = {
  getCuenta,
};