import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor() {}

  public login(): void {
    // Votre logique de login ici (c'est un exemple simple)
    if (this.username === 'utilisateur' && this.password === 'motdepasse') {
      this.errorMessage = '';
      alert('Login réussi !');
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
  }

}
