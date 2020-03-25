const connection = require('../database/connection');

module.exports = {
	async create(request, response){
		//rota de login: verificar se a ong existe.
		const { id } = request.body;

		//buscar uma ong do banco de dados
		const ong = await connection('ongs')
			.where('id', id)
			.select('name')
			.first();

			if(!ong){
				return response.status(400).json({
					error: 'No ONG found with this ID'
				});
			}
				//se tudo der certo, retornar o dado da ong
				return response.json(ong);
			}
}