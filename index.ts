class Pessoa {
    private nome: string;
    private telefone: string;
    constructor(nome: string, telefone:string){
        this.nome = nome;
        this.telefone = telefone;
    }
}
class PessoaFisica extends Pessoa{
    private cpf: string;
    private idade: number;
    
    constructor(cpf: string, idade: number, name:string, telefone:string){
        super(name, telefone);
        this.cpf = cpf;
        this.idade = idade;
        this.valirIdentificacao();
    }

    valirIdentificacao(){
        if(this.cpf.length === 14){
            return this.cpf
        }else{
            return "CPF inválido";
        }
    }

}
class PessoaJuridica extends Pessoa{
    private cnpj: string;
    private idade: number;
    
    constructor(cnpj: string, idade: number, name:string, telefone:string){
        super(name, telefone);
        this.cnpj = cnpj;
        this.idade = idade;
        this.valirIdentificacao();
    }

    valirIdentificacao(){
        if(this.cnpj.length === 18){
            return this.cnpj
        }else{
            return "CNPJ inválido";
        }
    }

}


