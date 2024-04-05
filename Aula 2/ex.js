// 1. Classe Usuario e filtragem de nomes em maiúsculas
class Usuario {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  const usuarios = [
    new Usuario("João", 20),
    new Usuario("Maria", 25),
    new Usuario("Pedro", 18)
  ];
  
  const nomesMaiusculos = usuarios.map(usuario => usuario.nome.toUpperCase());
  console.log(nomesMaiusculos);
  
  // 2. Filtrar usuários com idade superior a 18 anos
  const usuariosMaioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);
  console.log(usuariosMaioresDeIdade);
  
  // 3. Encontre o primeiro usuário com idade entre 25 e 30 anos
  const usuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
  console.log(usuarioEntre25e30);
  
  // 4. Filtrar números pares e mapeá-los para o dobro de seus valores
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosParesDobro = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2);
  console.log(numerosParesDobro);
  
  // 5. Classe Animal com subclasses Cachorro e Gato
  class Animal {
    emitirSom() {
      console.log("Som do animal");
    }
  
    correr() {
      console.log("Correndo");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("Latindo");
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log("Miando");
    }
  }
  
  const cachorro = new Cachorro();
  const gato = new Gato();
  
  cachorro.emitirSom();
  gato.emitirSom();
  
  // 6. Classe Livro e filtragem de livros com mais de 300 páginas
  class Livro {
    constructor(titulo, paginas) {
      this.titulo = titulo;
      this.paginas = paginas;
    }
  }
  
  const livros = [
    new Livro("Livro 1", 200),
    new Livro("Livro 2", 350),
    new Livro("Livro 3", 400)
  ];
  
  const livrosMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);
  console.log(livrosMaisDe300Paginas);
  
  // 7. Classe Carro e filtragem de carros da marca "Toyota" fabricados após 2010
  class Carro {
    constructor(marca, ano) {
      this.marca = marca;
      this.ano = ano;
    }
  }
  
  const carros = [
    new Carro("Toyota", 2008),
    new Carro("Toyota", 2015),
    new Carro("Honda", 2012)
  ];
  
  const primeiroToyotaDepois2010 = carros.find(carro => carro.marca === "Toyota" && carro.ano > 2010);
  console.log(primeiroToyotaDepois2010);
  
  // 8. Classe Produto e aumento de preços em 10%
  class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  const produtos = [
    new Produto("Produto 1", 50),
    new Produto("Produto 2", 100),
    new Produto("Produto 3", 150)
  ];
  
  const produtosComAumento = produtos.map(produto => {
    produto.preco *= 1.1; // Aumento de 10%
    return produto;
  });
  console.log(produtosComAumento);
  
  // 9. Encontre o primeiro produto com preço superior a R$ 100,00 e altere o nome para "Produto Caro"
  const produtoCaro = produtos.find(produto => produto.preco > 100);
  if (produtoCaro) {
    produtoCaro.nome = "Produto Caro";
  }
  console.log(produtos);
  
  // 10. Filtrar números divisíveis por 3 e mapeá-los para o quadrado de seus valores
  const numerosDivisiveisPor3Quadrado = numeros.filter(numero => numero % 3 === 0).map(numero => numero ** 2);
  console.log(numerosDivisiveisPor3Quadrado);