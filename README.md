# Desafio DIO: Escrevendo as Classes de um Jogo

Este repositório contém a resolução do desafio **"Escrevendo as Classes de um Jogo"**, proposto pela DIO.  
O objetivo do projeto é praticar conceitos fundamentais de programação utilizando **JavaScript**, com foco em classes, objetos, métodos e estruturas de decisão.

## Objetivo do desafio

Criar uma classe genérica que represente um herói de uma aventura.  
Cada herói deve possuir as seguintes propriedades:

- nome
- idade
- tipo

Além disso, a classe deve possuir um método chamado `atacar()`, responsável por exibir uma mensagem informando o tipo do herói e o ataque utilizado.

## Regras do ataque

O ataque deve variar de acordo com o tipo do herói:

| Tipo de herói | Ataque utilizado |
|--------------|------------------|
| mago | magia |
| guerreiro | espada |
| monge | artes marciais |
| ninja | shuriken |

A mensagem final deve seguir o formato:

```text
o {tipo} atacou usando {ataque}
```

Exemplo:

```text
o mago atacou usando magia
```

## O que foi desenvolvido

Neste projeto, foi criada a classe `Heroi`, contendo um método construtor para armazenar as características do personagem e um método `atacar()` para definir o ataque conforme o tipo do herói.

Também foram criados diferentes objetos a partir da classe, representando heróis de tipos variados, como:

- monge
- mago
- ninja
- guerreiro

Cada objeto executa o método `atacar()`, demonstrando o funcionamento da classe.

## Conceitos utilizados

Durante o desenvolvimento foram aplicados os seguintes conceitos:

- Variáveis
- Classes
- Objetos
- Métodos
- Construtor
- Estrutura de decisão com `switch`
- Template literals
- Instanciação de objetos
- Exibição de dados no console

## Exemplo de código

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
```

## Exemplo de uso

```javascript
const heroi1 = new Heroi("Alba", 26, "monge");
const heroi2 = new Heroi("Luna", 30, "mago");
const heroi3 = new Heroi("Kuro", 22, "ninja");
const heroi4 = new Heroi("Ragnar", 35, "guerreiro");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
```

## Saída esperada

```text
o monge atacou usando artes marciais
o mago atacou usando magia
o ninja atacou usando shuriken
o guerreiro atacou usando espada
```

## Aprendizado

Este desafio ajudou a reforçar a criação de classes e objetos em JavaScript.  
Também permitiu praticar o uso de métodos dentro de uma classe e a aplicação de estruturas de decisão para alterar o comportamento do programa conforme o tipo do personagem.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Git
- GitHub
