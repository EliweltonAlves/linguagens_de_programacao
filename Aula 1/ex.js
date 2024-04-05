// 1. Operações matemáticas básicas
let num1 = 10;
let num2 = 5;

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);

// 2. Números ímpares de 0 a 100
console.log("Números ímpares de 0 a 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 3. Quantidade de caracteres em "Disciplina de Programação para web"
const texto = "Disciplina de Programação para web";
console.log("Quantidade de caracteres:", texto.length);

// 4. Primeiro e último nome para email
const nomeCompleto = "Eliwelton Alves de Oliveira";
const nomeSeparado = nomeCompleto.split(" ");
const primeiroNome = nomeSeparado[0].toLowerCase();
const ultimoNome = nomeSeparado[nomeSeparado.length - 1].toLowerCase();
console.log(`${primeiroNome}.${ultimoNome}@facens.br`);

// 5. Imprimir números de 1 a 10 com traços
let numeros = "";
for (let i = 1; i <= 10; i++) {
  numeros += i;
  if (i < 10) {
    numeros += " - ";
  }
}
console.log(numeros);

// 6. Função para dobrar um número
function dobrarNumero(numero) {
  if (numero <= 0) {
    return "Só é aceito números positivos maiores que zero";
  }
  return numero * 2;
}

console.log(dobrarNumero(5)); // Exemplo de uso

// 7. Função para inverter uma string
function inverterString(str) {
  return str.split("").reverse().join("");
}

console.log(inverterString("Eliwelton")); // Exemplo de uso

// 8. Função para contar vogais em uma string
function contarVogais(str) {
  const vogais = str.match(/[aeiou]/g);
  return vogais ? vogais.length : 0;
}

console.log(contarVogais("Eliwelton")); // Exemplo de uso

// 9. Função para validar um e-mail
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log(validarEmail("test@example.com")); // Exemplo de uso

// 10. Função para verificar se uma string é um palíndromo
function ehPalindromo(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(ehPalindromo("arara")); // Exemplo de uso