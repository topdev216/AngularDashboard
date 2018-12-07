import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class AuthenticationService {

    constructor(public afAuth: AngularFireAuth){
    }

    //login with email and pass in firebase
    login(value){
        return new Promise<any>((resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err))
        })
    }

    //register new user in firebase
    doRegister(value){
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(function(user){
                return user.sendEmailVerification().then(res => {
                    resolve(res);
                }, err => reject(err));
            });
        })
    }

    //log out in firebase
    logout(){
        this.afAuth.auth.signOut();
    }

}