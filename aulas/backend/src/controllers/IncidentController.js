const connection = require('../database/connection');

module.exports = {

	// método index para fazer a listagem 
	async index(request, response) {
	//Trazendo todos os dados do incidents
	const incidents = await connection('incidents').select('*');
	return response.json(incidents);
	},

	async create(request, response){
		const { title, description, value } = request.body;
		const ong_id = request.headers.authorization;

		//buscando com um único id
	const [id] =	await connection('incidents').insert({
			title,
			description,
			value,
			ong_id,
		});

		return response.json({ id });
	},

	async delete(request, response){
		 //pegar o id q vem do resquest.params -> Q é o parâmetro de rota
		 const { id } = request.params;

		 //pegar o id da ong logada. Para poder verificar se o incidente que está sendo pedido para ser deletado, se realmente foi criado
		 const ong_id = request.headers.authorization;

		 const incident = await connection('incidents')
		.where('id', id) //  buscar o incidente
		.select('ong_id')
		.first(); //q vai retornar apenas um resultado

		if(incident.ong_id != ong_id){
			return response.status(401).json({ error: 'Operation not permited.'});
		}

		await connection('incidents').where('id', id).delete();

		return response.status(204).send();
	}
};