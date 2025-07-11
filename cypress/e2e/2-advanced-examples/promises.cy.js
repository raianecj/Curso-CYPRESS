// Promises

it('sem testes, ainda', () => {})


// Deixar o metodo como assincrono, assim a requisição pode ser aguardada enquanto o teste roda
const getSomething = (callback) => {
    setTimeout(() => {
        callback(12)
    },1000)
}

const system = () => {
    console.log('init')
    getSomething(some => console.log(`Something is ${some}`))
    console.log('end')
}

system()