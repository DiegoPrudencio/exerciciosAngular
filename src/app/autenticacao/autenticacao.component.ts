import { Component } from "@angular/core";

@Component({
    selector: 'app-autenticacao',
    templateUrl: './autenticacao.component.html',
    styleUrls: ['./autenticacao.component.css']
})

export class AutenticacaoComponent {

    email: string = "";
    password: string = "";
    message: string = "";
    contador: number = 0;
    color: string = "";


    public login() {


        this.contador++


            if (this.contador < 3) {
                if ((this.email == "XPTO-21") && (this.password == "Trocar@123")) {
                    this.message = "Logado!"
                    this.color = "green"
                } else if ((this.email != "XPTO-21") && (this.password == "Trocar@123")) {
                    this.message = "Acesso negado, usuário incorreto";
                    this.color = "red"
                    this.email = "";
                    this.password = "";                    
                } else if ((this.email == "XPTO-21") && (this.password != "Trocar@123")) {
                    this.message = "Acesso negado, senha incorreta"
                    this.color = "red"
                    this.email = "";
                    this.password = "";
                }
                
            } else if (this.contador === 3) {
                    this.message = "Usuário Bloqueado!"
            
            }
                   
            console.log(this.contador);


    }

}