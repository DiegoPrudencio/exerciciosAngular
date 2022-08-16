import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "angularProject"


  hOneTitle: string = "";
  hOneChange: string = "";
  input: string = "";
  clear: string = "";
  

  public onBlur(valor: string) {
    this.hOneChange = valor; 
  }

  public salvarBtn(){
    this.hOneTitle = this.hOneChange
    
  }

  public limparBtn(){
    this.clear = '';
  
  }



}
