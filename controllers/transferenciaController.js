import { TransferenciaModel } from '../models/transferenciaModel.js';

const getTransferenciasById = async (req, res) => {
  try {
    const { id } = req.params;
    const transferencias = await TransferenciaModel.findCuentaId(id);
    return res.json(transferencias);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const createTransfer = async (req, res) => {
  try {
    const { cuenta_origen, cuenta_destino, monto } = req.body;

    const transfer = await TransferenciaModel.create(
      cuenta_origen,
      cuenta_destino,
      monto
    );
    return res.status(201).json(transfer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const TransferenciaController = {
  getTransferenciasById,
  createTransfer,
};
