const express = require('express');

const app = express();

app.get('/users', (request, response) => {
	const params = request.query;

	console.log(params);

	//criando a primeira rota

	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluna: 'Tayná'
	});
});

app.listen(3333);