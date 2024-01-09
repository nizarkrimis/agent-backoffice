import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private profileService: ProfileService) { }


  private originalData: any; // Garder une copie des données d'origine


  public username: string = 'utilisateur';
  public firstName: string = 'Samir';
  public lastName: string = 'Bensaid';
  public cne: string = '0000000';
  public phone: string = '000-000-00890';
  //public email: string = 'john.doe@example.com';
  public accountId: string = 'A123456789';
  public photoUrl: string = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; // Lien d'exemple vers une photo
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
      //email: this.email,
      accountId: this.accountId,
      photoUrl: this.photoUrl
    };
  }

  public saveChanges(): void {
    // Ajoutez ici la logique pour sauvegarder les modifications
    console.log('Modifications sauvegardées :', this.username, this.firstName, this.lastName, this.cne, this.phone);
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
      //this.email = this.originalData.email;
      this.originalData = null;
    }
    this.editing = false;
  }

  ngOnInit(): void {
    const userEmail = String(localStorage.getItem('username'));
    // const userEmail = "nizar";

  // Call the service to get profile data
  this.profileService.getProfileData(userEmail).subscribe(
    (data) => {
      if (data) {
        // Update the component properties with the fetched data
        console.log(data.firstName);
        this.username = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.cne = data.cne;
        this.phone = data.phone;
        //this.email = data.email;
        this.accountId = data.agentId;
        //this.photoUrl = data.photoUrl;
      } else {
        console.error('Profile data is null or undefined.');
        // Handle the case when data is null or undefined
      }
    },
    (error) => {
      console.error('Error fetching profile data:', error);
    }
  );
}

}
