import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "angularProject"

  constructor(private router: Router){}

  isHidden: boolean = true

  public logout(){
    localStorage['token'] = "false"
    this.isHidden = true;
    this.router.navigate(['/login']);
  }

  public readLocalStorageToken() {
    if (localStorage['token'] === "true") {
      this.isHidden = false;
      return true
    } else {
      return false
    }
  }



}
