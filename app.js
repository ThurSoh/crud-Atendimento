import express, { json } from 'express'
import Router from './routers/atendimentoRoute.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(json());
app.use(Router);

export default app;