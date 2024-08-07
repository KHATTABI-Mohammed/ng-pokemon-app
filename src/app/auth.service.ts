import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    isLoggedIn: boolean =false;
    redirectUlrl: string;
  login(name:string,password:string):Observable<boolean>{
    const isLoggedIn = (name=='pikachu' && password=='pikachu');
    return of(isLoggedIn).pipe(
        delay(100),
        tap(isLoggedIn=>this.isLoggedIn=isLoggedIn)

        );

  }

  logout(){
    this.isLoggedIn=false;
      }
}
