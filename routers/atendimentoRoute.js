import express from 'express';
import { getHandler, addHandler } from '../controllers/sacControllers.js'

const router = express.Router();

router.get('/Atendimento', getHandler());

router.post('/novoAtendimento', addHandler());

export default router;