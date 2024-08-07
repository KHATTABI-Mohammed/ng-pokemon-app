import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
    message:string='vous etes deconnecté(pikachu/pikachu)';
    name:string;
    password:string;
    auth:AuthService;
    constructor(private authService:AuthService, private router: Router){
        }
    ngOnInit(){
        this.auth=this.authService;

        }

    setMessage(){
        if(this.auth.isLoggedIn){
            this.message='vous etes connecté';
            }
        else{
             this.message='identifiant ou mot de pass incorrect';
            }
        }

   login() {
    this.message = "Tentative de connexion en cours...";
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn) {
          this.router.navigate(['/pokemons']);
        } else {
          this.password = '';
          this.router.navigate(['/login']);
        }

      })
  }

    logout(){
        this.auth.logout();
        this.message='vous etes deconnecté';

        }



}
