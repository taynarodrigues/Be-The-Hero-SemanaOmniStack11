const crypto = require('crypto');

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
		// fazendo a desetruturação dos dados em uma váriavel separada
		const {
			name,
			email,
			whatsapp,
			city,
			uf
		} = request.body;
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
		return response.json({
			id
		});
}
};