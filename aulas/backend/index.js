const express = require('express');

const app = express();

app.get('/users/:id', (request, response) => {
	const params = request.params;

	console.log(params);

	//criando a primeira rota

	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluna: 'Tayná'
	});
});

app.listen(3333);
