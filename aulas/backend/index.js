const express = require('express');

const app = express();

app.post('/users', (request, response) => {
	// return response.send('Hello World');

	//criando a primeira rota
	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluna: 'Tayná Rodrigues'
	});
});

app.listen(3333);