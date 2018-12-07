import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from "@firebase/app";
import { FirebaseAuth } from "@firebase/auth-types";
import { auth } from "firebase/app";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        public afAuth: AngularFireAuth,
        public userService: UserService,
        private router: Router
    ) {}
    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Promise((resolve, reject) => {
                this.userService.getCurrentUser()
                .then(user => {
                    if(user.emailVerified){
                        return resolve(true);
                    }else{
                        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                        return resolve(false);
                    } 
                }, err => {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return resolve(false);
                })
            })
    }
}