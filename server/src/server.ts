/*Primeiro arquivo aberto da aplicacao. Definite rotas*/
import express from 'express';
import cors from 'cors';
import routes from './database/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// http://localhost:3333/
app.listen(3333); /*ouve requisicoes http */