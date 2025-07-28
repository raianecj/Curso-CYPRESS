// Describe / it
/// <reference types="cypress" />

// it é usado para definir um teste específico fora ou dentro de um bloco describe.
it('A external test...', () => {
    // Aqui você pode escrever o código do teste
    
})

// Describe agrupa testes relacionados
describe('A group of tests', () => {
    // it é usado para definir um teste específico dentro de um bloco describe.
    it('A test inside a group', () => {
        // Aqui você pode escrever o código do teste
        expect(true).to.equal(true)
    })

    // it.skip é usado para pular um teste específico dentro de um bloco describe.
    it.skip('Another test inside the same group', () => {
        // Aqui você pode escrever o código do teste
        expect(true).to.equal(true)
    })

    describe('Another group of tests', () => {
        // it.only é usado para executar apenas um teste específico dentro de um bloco describe. Sera executado os only mais recente
        it.only('A test inside another group', () => {
            // Aqui você pode escrever o código do teste
            expect(true).to.equal(true)
        })
        })

})