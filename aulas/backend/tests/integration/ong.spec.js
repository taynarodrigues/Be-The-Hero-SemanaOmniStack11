const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    //Antes de executar cada um dos testes execute a função 'connection' e fazer o migrate do knex
    beforeEach(async () => {
        await connection.migrate.rollback(); //antes de executar as migrates...desfazer todas as migrations
        await connection.migrate.latest();
    });

    afterAll(async () => {
      await connection.destroy(); //fazer a desconexão 
    });

    it('should be able to create a new ONG', async () => {
     const response = await request(app)
      .post('/ongs')
      .send({
        name: "APADTay",
        email: "contato@teste.com",
        whatsapp: "47992825179",
        city: "Manaus",
        uf: "AM"
    }); //teste de integração \0/

    console.log(response.body);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});