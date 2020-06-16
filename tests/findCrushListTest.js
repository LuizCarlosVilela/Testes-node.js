const { interfaces } = require("mocha");
const should = require('should');
const findCrushs = require('../findCrushs');

describe('find crushs', () => {
    it('soma crushs', () => {
        findCrushs.somaCrush(2, 3).should.be.equal(5);
    });
    it('somar dois números e retornar 30', () => {
        findCrushs.somaCrush(10, 20).should.be.equal(30);
    });
    it('Passar um nome e deve retornar mensagem de pessoa não encontrada', () => {
        findCrushs.encontrarCrush('Joselito Marques').should.be.equal('Crush não encontrado');
    });
    it('retornar a mensagem campo nome está vázio', () => {
        findCrushs.encontrarCrush().should.be.equal('Campo nome está vázio');
    });
    it('retornar mensagem de tipo inválido', () => {
        findCrushs.encontrarCrush(123).should.be.equal('Tipo inválido');
    });
    it('Deve retornar um nome da lista', () => {
        findCrushs.encontrarCrush('Carlos Daniel').should.be.equal('Carlos Daniel');
    });
})