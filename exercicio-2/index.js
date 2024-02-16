/*

*Faça uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, um
objeto com dados que vão atualizar o objeto do primeiro parâmetro. Obs: se no objeto do segundo
parâmetro tiver dados que o objeto do primeiro não tem, o valor não deve persistir no objeto de retorno
da função. Somente são atualizados os dados que o objeto do primeiro parâmetro possuir.


*/

function updateData(existingData, newData) {
    for (let key in existingData) {
        if (newData.hasOwnProperty(key)) {
            existingData[key] = newData[key];
        }
    }
    return existingData;
}

const currentData = { name: "Marcos", country: "Brasil", age: 22 };
const newData = { country: "Japão", age: 33 };

console.log(updateData(currentData, newData));


