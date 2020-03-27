const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //digo que vou enviar dados no formato json no corpo de requisiçao
app.use(routes);

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?"
 * const params = request.query;
 * 
 * Route params: ParÂmetros utilizados para identificar recursos ex: "/:id"
 * const params = request.params;
 * 
 * Request body: Corpo da requisição, utilizado para criar ou alterar recurços
 * const params = request.body;
 */

app.listen(3333);