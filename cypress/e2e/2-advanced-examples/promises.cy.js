// Promises
// Promises são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

it('sem testes, ainda', () => {})

// Demonstração básica de como uma função assíncrona funciona com callbacks

// const getSomething = (callback) => {
//     setTimeout(() => {
//         callback(12)
//     },1000)
// }

// const system = () => {
//     console.log('init')
//     getSomething(some => console.log(`Something is ${some}`))
//     console.log('end')
// }

// system()

// A Promise é um objeto que pode ser usado para encadear operações assíncronas de forma mais legível.
// Aqui, usamos uma Arrow Function para definir a função que retorna uma Promise.
const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
}

const system = () => {
    console.log('init')
    const prom = getSomething()
    prom.then(some => {
        console.log(`Something is ${some}`)
    })
    console.log('end')
}

system()

