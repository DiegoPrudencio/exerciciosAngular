import { Component, OnInit } from "@angular/core";
import { Usuario } from "../interfaces/usuario/usuario";
import { AutenticacaoService } from "../services/autenticacao.service";


@Component({
    selector: 'app-autenticacao',
    templateUrl: './autenticacao.component.html',
    styleUrls: ['./autenticacao.component.css']
})

export class AutenticacaoComponent {


    userID: string = ""; //XPTO-01
    userPassword: string = ""; //Trocar@123
    msn: string = "";
    contador: number = 0;
    color: string = "";
    isMessage: boolean = false;
    isSpinner: boolean = false;
    classes = {
        colorOne: "green",
        colorTwo: "red"
    }

    // user?: Usuario;

    usuario: Usuario = {
        userId: "",
        password: "",
        tipo: ""
    }

    constructor(private autenticacaoService: AutenticacaoService) { }

    ngOnInit(): void {
    }

    getUsuario(): void {
        this.autenticacaoService.getUsuario().subscribe((usuario) => (this.usuario = usuario[0]))
        console.log(this.usuario);
    }

    public login() {

        this.isMessage = false
        this.contador++
        this.isSpinner = true

        this.getUsuario()

        setTimeout(() => {
            this.isSpinner = false
            this.isMessage = true
            this.messageField()
        }, 1000);

    }

    messageField() {


        if (this.contador < 4) {
            if ((this.userID == this.usuario.userId) && (this.userPassword == this.usuario.password)) {
                this.msn = "Logado!"
                console.log(this.msn);
                this.color = this.classes.colorOne;
                this.clearInput()
            } else if ((this.userID != this.usuario.userId) && (this.userPassword == this.usuario.password)) {
                this.msn = "Acesso negado, usuário incorreto";
                this.color = this.classes.colorTwo;
                this.clearInput()
            } else if ((this.userID == this.usuario.userId) && (this.userPassword != this.usuario.password)) {
                this.msn = "Acesso negado, senha incorreta"
                this.color = this.classes.colorTwo;
                this.clearInput()
            } else if ((this.userID != this.usuario.userId) && (this.userPassword != this.usuario.password)) {
                this.msn = "Acesso negado, login e/ou senha incorreta"
                this.color = this.classes.colorTwo;
                this.clearInput()
            }
        } else if (this.contador === 4) {
            this.msn = "Usuário Bloqueado!"
            this.color = this.classes.colorTwo;
        }
    }

    clearInput() {
        this.userID = "";
        this.userPassword = "";
    }


}

