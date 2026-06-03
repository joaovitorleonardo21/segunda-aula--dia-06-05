/* 
Crie um array com 5 nomes de cidades e:

Exiba o tamanho do array.
Exiba a primeira cidade.
Adicione uma nova cidade no final.
Remova a última cidade.
Exiba o array final.
*/

let cidades = ['Alto do Rodrigues', 'Pendencias', 'Macau', 'Guamaré', 'Baixa do Meio'];

console.log(cidades.length);
console.log('\n');


console.log(cidades[0]);
console.log('\n');

/*cidades.push('Mossoró'); deixa o nome no ultimo elemento do array
console.log(cidades);
console.log('\n'); */

/*array final
cidades.pop(); tira o ultimo elemento do array
console.log(cidades);
console.log('\n');   */

cidades.splice(4,0,"Mossoró")
console.log(cidades);
console.log('\n');

cidades.pop();
console.log(cidades);
console.log('\n');


//Argumento 1 - posição
//Argumento 2 - qnts elementos serão removidos
//Argumento 3 - lista de elementos que serão inseridos
//\array\.splice(2,0,'Kiwi','Blueberry')
//console.log(\array\);


/* 2- Utilize map() para criar um novo array contendo os valores multiplicados por 3.*/
const numeros1 = [10, 20, 30, 40, 50];

const multiplicados1 = numeros1.map(num => num * 3);    // ou const multiplicados1 = numeros1.filter(num => num * 3);
console.log(multiplicados1);
console.log('\n');


/* 3- Utilize filter() para exibir apenas os números pares.*/
const numeros2 = [3, 8, 15, 20, 25, 30];

const pares = numeros2.filter(
    numeros2 => numeros2 %2 === 0)        
    //const pares = numeros2.map(numeros2 => numeros2 %2 === 0)

console.log(pares);
console.log('\n');


/* 4- Utilize reduce() para somar todos os elementos:*/
const numeros3 = [5, 10, 15, 20];

const soma = numeros3.reduce((total, num) => total + num, 0);
console.log(soma);
console.log('\n');



/* 5- Utilize filter() para mostrar apenas as frutas que começam com a letra "A".  */
const frutas = ["Banana", "Abacaxi", "Maçã", "Acerola", "Kiwi"];

const frutasComA = frutas.filter(fruta => fruta.startsWith("A"));
console.log(frutasComA);
console.log('\n');


/* 6- Cadastre pelo menos 5 produtos e:

Exiba todos os produtos.
Exiba apenas os produtos da categoria "Eletrônico".
*/

function Produto(nome, preco, categoria,quantidade) {
  this.nome = nome;
  this.preco = preco;
  this.categoria = categoria;
  this.quantidade = quantidade;
}

const produtos = [
  new Produto("Notebook", 3500, "Eletrônico",1),
  new Produto("Celular", 2000, "Eletrônico",1),
  new Produto("Mesa", 500, "Móveis",1),
  new Produto("Teclado", 150, "Eletrônico",1),
  new Produto("Cadeira", 300, "Móveis",1) ];

console.log(produtos);
console.log('\n');


const eletronico = produtos.filter(
      (produto) => produto.categoria === 'Eletrônico');
console.log(eletronico);
console.log('\n');

/* 7- Valor total de todos os produtos em estoque 
*/

const total =
produtos.reduce((soma, produto) => soma + produto.preco * produto.quantidade, 0);
console.log("R$", total);
console.log('\n');


/* 8- Ordene os produtos por nome (crescente/descrescente)
*/

const crescente = produtos
  .toSorted((a, b) => a.nome.localeCompare(b.nome)) // Ordem crescente
  .map(produto => produto.nome);
console.log(("Produtos por nome crecente"), crescente);
console.log('\n');


const decrescente = produtos
  .toSorted((a, b) => b.nome.localeCompare(a.nome)) // Ordem decrescente
  .map(produto => produto.nome);
console.log(("Produtos por nome decrescente"), decrescente);
console.log('\n');


/*   9- Ordene os produtos por preço (crescente/descrescente)
*/

const menorPreço = produtos
  .toSorted((a, b) => a.preco - b.preco) // Ordem crescente
  .map(produto => produto.preco);
console.log("Produtos por preço crescente", menorPreço);
console.log('\n');


const maiorPreço = produtos
  .toSorted((a, b) => b.preco - a.preco) // Ordem decrescente
  .map(produto => produto.preco);
console.log("Produtos por preço decrescente", maiorPreço);
console.log('\n');



/* 10- Filtre produtos de acordo com uma categoria
*/

const moveis = produtos.filter(
  (produto) => produto.categoria === 'Móveis'
)

console.log(moveis);
console.log('\n');