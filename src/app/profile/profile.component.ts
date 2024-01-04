import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  private originalData: any; // Garder une copie des données d'origine


  public username: string = 'utilisateur';
  public firstName: string = 'John';
  public lastName: string = 'Doe';
  public cne: string = '123456789';
  public phone: string = '123-456-7890';
  public email: string = 'john.doe@example.com';
  public accountId: string = 'A123456789';
  public photoUrl: string = 'https://placekitten.com/200/200'; // Lien d'exemple vers une photo
  public editing: boolean = false;

  public editProfile(): void {
    this.editing = true;
    // Sauvegarder une copie des données d'origine
    this.originalData = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      cne: this.cne,
      phone: this.phone,
      email: this.email,
      accountId: this.accountId,
      photoUrl: this.photoUrl
    };
  }

  public saveChanges(): void {
    // Ajoutez ici la logique pour sauvegarder les modifications
    console.log('Modifications sauvegardées :', this.username, this.firstName, this.lastName, this.cne, this.phone, this.email);
    this.editing = false;
    
  }

  public cancelEdit(): void {
    // Ajoutez ici la logique pour annuler les modifications
     // Annuler les modifications en restaurant les données d'origine
     if (this.originalData) {
      this.username = this.originalData.username;
      this.firstName = this.originalData.firstName;
      this.lastName = this.originalData.lastName;
      this.cne = this.originalData.cne;
      this.phone = this.originalData.phone;
      this.email = this.originalData.email;
      this.originalData = null;
    }
    this.editing = false;
  }


}
