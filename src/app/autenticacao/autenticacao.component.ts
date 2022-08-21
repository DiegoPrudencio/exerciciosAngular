import { Component } from "@angular/core";
import { Usuario } from "../interfaces/usuario/usuario";


@Component({
    selector: 'app-autenticacao',
    templateUrl: './autenticacao.component.html',
    styleUrls: ['./autenticacao.component.css']
})

export class AutenticacaoComponent {

    email: string = "XPTO-21";
    password: string = "Trocar@123";
    message: string = "";
    contador: number = 0;
    color: string = "";
    isMessage: boolean = false;
    isSpinner: boolean = false;
    classes = {
        colorOne: "green",
        colorTwo: "red"
    }


    usuario: Usuario = {
        userId: "",
        password: "",
        tipo: ""
    }


    public login() {

        this.isMessage = false
        this.contador++
        this.isSpinner = true

        setTimeout(() => {
            this.isSpinner = false
            this.isMessage = true
            this.messageField()
        }, 1000);

    }

    messageField() {
        if (this.contador < 3) {
            if ((this.usuario.userId == this.email) && (this.usuario.password == this.password)) {
                this.message = "Logado!"
                this.color = this.classes.colorOne;
                this.clearInput()
            } else if ((this.usuario.userId != this.email) && (this.usuario.password == this.password)) {
                this.message = "Acesso negado, usuário incorreto";
                this.color = this.classes.colorTwo;
                this.clearInput()
            } else if ((this.usuario.userId == this.email) && (this.usuario.password != this.password)) {
                this.message = "Acesso negado, senha incorreta"
                this.color = this.classes.colorTwo;
                this.clearInput()
            }
        } else if (this.contador === 3) {
            this.message = "Usuário Bloqueado!"
            this.color = this.classes.colorTwo;
        }
    }

    clearInput() {
        this.usuario.userId = "";
        this.usuario.password = "";
    }


}

