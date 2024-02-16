/*

Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou
resposta para sua pergunta secreta ainda está correto. No entanto, como alguém pode olhar por cima
do seu ombro, você não quer que isso apareça em sua tela. Em vez disso, nós o mascaramos. Sua
tarefa é escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".

*/
const maskedCreditCard = maskify("3417 6132 1447 3116");

const clientName = maskify("joao alves neto")


function maskify(confidentialData) {
    if (confidentialData.length > 4) {
        return confidentialData.slice(0, -4).replace(/[^ ]/g, '#') + confidentialData.slice(-4); // aqui achei interessante fazer com que a função respeitasse os espaços sem que os substituisse por #. Porém caso fosse necessario que eles se tornassem # também, no replace seria usado (/./g, '#'), assim seria exibito tudo com o formato em # exceto os ultimos 4 digitos/caracteres.
    } else {
        return confidentialData;
    }
}

console.log(maskify(maskedCreditCard))
console.log(maskify(clientName))