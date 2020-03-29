//Fazendo o processo de separação do arquivo 'generateUniqued', pois se em agum outro lugar for precisar de ID único, tem-se tal código isolado para quando fizer uma alteração ocorrer pra todos os lugares
const generateUniqued = require('../utils/generateUniqueId'); 

//conexão com o banco
const connection = require('../database/connection');

// exportar os objestos com os métodos
module.exports = {

// criando uma rota com a listagem das ongs
	async index (request, response)  {
		const ongs = await connection('ongs').select('*');
		return response.json(ongs);
	},

	// método create
	async create(request, response){
		const { name, email, whatsapp, city, uf } = request.body;

		const id = generateUniqued(); 

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
		return response.json({
			id
		});
}
};