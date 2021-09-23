/*Criando a classe logistica / Criando e atribuindo o factoryMethod chamada 'transporte'*/
abstract class Logistica {

    public abstract factoryMethod(): Transporte;

}
/*Criando a chamada da interface 'transporte'*/
interface Transporte {
    operation(): string;
}

/*Criando uma chamada 'Navio' e atribuindo o factory Method ao método 'Maritmo'*/

class Navio extends Logistica {

    public factoryMethod(): Transporte {
        return new Maritmo();
    }
}
/*Criando uma chamada 'Caminhao' e atribuindo o factory Method ao método 'Terreo'*/

class Caminhao extends Logistica {
    public factoryMethod(): Transporte {
        return new Terreo();
    }
}
/*Criando o retorno do método 'Maritmo'*/

class Maritmo implements Transporte {
    public operation(): string {
        return '{Trasnporte Marítmo}';
    }
}
/*Criando o retorno do método 'Terreo'*/
class Terreo implements Transporte {
    public operation(): string {
        return '{Trasnporte Terreo}';
    }
}

