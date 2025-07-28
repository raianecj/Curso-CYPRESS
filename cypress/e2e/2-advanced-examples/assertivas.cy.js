// Assertivas de teste usando Cypress
/// <reference types="cypress" />

// Exemplo de uso de assertivas no Cypress de Igualdade
it('Equality', () => {
    const a = 1;
    expect(a).to.equal(1); // Verifica se a variável a é igual a 1
    expect(a, 'Deveria ser 1').to.equal(1) // Verifica com uma mensagem personalizada
    expect(a).to.be.equal(1) // Verifica se a variável a é estritamente igual a 1
    expect('a').not.to.be.equal('b') // Verifica se 'a' não é igual a 'b'
})

// Exemplo de uso de assertivas de veracidade (verdadeiro/falso)
it('Truthy', () => {
    const a = true;
    const b = null;
    let c;


    expect(a).to.be.true; // Verifica se a variável a é verdadeira
    expect(true).to.be.true; // Verifica se o valor true é verdadeiro
    expect(b).to.be.null; // Verifica se a variável b é nula
    expect(c).to.be.undefined; // Verifica se a variável c é indefinida
    expect(a).to.be.not.null; // Verifica se a variável a não é nula
})

// Exemplo de uso de assertivas de igualdade de objetos
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equals(obj) // Verifica se o objeto é igual ao objeto esperado
    expect(obj).to.deep.equal({ a: 1, b: 2 }) // Verifica se o objeto é igual ao objeto esperado
    expect(obj).to.include({ a: 1 }) // Verifica se o objeto inclui a propriedade a com valor 1
    expect(obj).to.have.property('b', 2) // Verifica se o objeto tem a propriedade b com valor 2
    expect(obj).to.not.include({ c: 3 }) // Verifica se o objeto não inclui a propriedade c com valor 3
    expect(obj).to.not.be.empty // Verifica se o objeto não está vazio

})

// Exemplo de uso de assertivas de arrays
it('Array Equality', () => {
    const arr = [1, 2, 3]

    expect(arr).to.be.have.members([1, 2, 3]) // Verifica se o array contém os elementos 1,2,3
    expect(arr).to.include.members([1, 2]) // Verifica se o array inclui os elementos 1 e 2
    expect(arr).to.have.length(3) // Verifica se o array tem comprimento 3
    expect(arr).to.not.be.empty // Verifica se o array não está vazio
    expect([]).to.be.empty // Verifica se o array vazio está realmente vazio
})

// Exemplo de uso de assertivas de tipos
it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number') // Verifica se num é do tipo number
    expect(str).to.be.a('string') // Verifica se str é do tipo string
    expect({}).to.be.an('object') // Verifica se o objeto é do tipo object
    expect([]).to.be.an('array') // Verifica se o array é do tipo array
})

// Exemplo de uso de assertivas de string
it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste') // Verifica se a string é igual à string esperada
    expect(str).to.have.length(15) // Verifica se a string tem comprimento 15
    expect(str).to.contains('de') // Verifica se a string contém a substring 'de'
    expect(str).to.match(/de teste/) // Verifica se a string corresponde à expressão regular /de teste/
    expect(str).to.match(/^String/) // Verifica se a string começa com 'String'
    expect(str).to.match(/teste$/) // Verifica se a string termina com 'teste'
    expect(str).to.match(/.{15}/) // Verifica se a string tem exatamente 15 caracteres
    expect(str).to.match(/\w+/) // Verifica se a string contém pelo menos uma palavra
    expect(str).to.match(/\D+/) // Verifica se a string contém pelo menos um caractere não numérico
})

// Exemplo de uso de assertivas de números
it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4) // Verifica se o número é igual a 4
    expect(number).to.be.above(3) // Verifica se o número é maior que 3
    expect(number).to.be.below(5) // Verifica se o número é menor que 5
    expect(floatNumber).to.be.closeTo(5.21, 0.01) // Verifica se o número flutuante está próximo de 5.21 com uma tolerância de 0.01
    expect(floatNumber).to.be.equal(5.2123) // Verifica se o número flutuante é igual a 5.2123
    expect(floatNumber).to.be.above(5) // Verifica se o número flutuante é maior que 5
})