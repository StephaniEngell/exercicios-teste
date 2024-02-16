// Faça uma função que verifica se a primeira letra de uma string é maiúscula, retornando true ou false.

function checkIfTheFirstLetterIsUppercase(word) {
    const isWordEmpty = word.length === 0;

    if (isWordEmpty) {
        return false;
    }

    const firstCharacter = word.charAt(0);

    const isFirstCharacterUppercase = firstCharacter === firstCharacter.toUpperCase();

    return isFirstCharacterUppercase;
}

console.log(checkIfTheFirstLetterIsUppercase("Brasil")); // Deve retornar true
console.log(checkIfTheFirstLetterIsUppercase("mobiauto")); // Deve retornar false
console.log(checkIfTheFirstLetterIsUppercase("xXx xXx")); // Deve retornar false
console.log(checkIfTheFirstLetterIsUppercase("xDD")); // Deve retornar false
console.log(checkIfTheFirstLetterIsUppercase("Deu Certo!")); // Deve retornar true


