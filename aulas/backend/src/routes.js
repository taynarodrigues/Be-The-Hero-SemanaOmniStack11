const express = require('express');
const crypto = require('crypto');
//importar o arquivo dentro dos arquivos que precisa se comunicar com o banco de dados
const connection = require('./database/connection');


const routes = express.Router();

// criando uma rota com a listagem das ongs
routes.get('/ongs', async (request, response) => {
	const ongs = await connection('ongs').select('*');
	return response.json(ongs);
});

// função assíncrona async
routes.post('/ongs', async (request, response) => {
	// fazendo a desetruturação dos dados em uma váriavel separada
	const {name, email, whatsapp, city, uf} = request.body;
//criar um "id" da ONG através do método para gerar um texto aleatorio de um pacote do NODE que é o crypto
	const id = crypto.randomBytes(4).toString('HEX');

	// Qunado o NODE chegar neste trecho de código o "await" vai aguardar até o insert finalizar
	await connection('ongs').insert({
		id,
		name,
		email,
		whatsapp,
		city,
		uf
	})

	// Daí vai-se retornar apenas o id
	return response.json({ id });
});

module.exports = routes;