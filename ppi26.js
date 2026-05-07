// prpogramação para internet
// aluno: João vitor leonardo

//introdução ao javaScript

// ATIVAR O FORMATADOR PRETTIER
// ALT + SHIFT + F


console.log("bem vindos ao ppi");

// variaveis
let name = "joão vitor";
let age = 17;
let isStduant = true;

const PI = 3.14; // não pode mudar de valor
console.log(PI);

// operadores aritiméticos
let x = 5 + 5;
let y = "5" + 5;
let z = "hello" + 5;

console.log(x, y, z);
console.log(typeof x);

// Operadores relacionais
console.log( '5' == 5); // Compara tipo OU valor 
console.log( '5' === 5); // Compara tipo E valor 

// Operadores de incremento
console.log(x++); //incremento após o retorno do valor
console.log(x);
console.log(++x); //incremento antes o retorno do valor

// x==;
// ++x;
// x+= 1;
// x = x +1;


// operadores logicos - (&& AND) (|| OR) (! NOT) 
let isExpression = (true && 5 + 2 * 3 < 10) || false
console.log(isExpression);

//if ... else
// if (condition) {
// condition === true
// }
// else {
// condition === false
// }

//template strings
let text = `react é tudo de bom...
eu amo o ifrn` 
