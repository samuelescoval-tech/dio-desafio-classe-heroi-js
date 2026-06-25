//Classe que representa o nosso herói no jogo.
 

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //Método que define o ataque do herói com base no seu tipo.
    atacar() {
        let ataque = ""

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
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


//Criando instâncias da classe Heroi
const heroi1 = new Heroi("Alba", 26, "monge");
const heroi2 = new Heroi("Luna", 30, "mago");
const heroi3 = new Heroi("Kuro", 22, "ninja");
const heroi4 = new Heroi("Ragnar", 35, "guerreiro");

//Chamando o método atacar() para cada herói
heroi1.atacar(); 
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar();