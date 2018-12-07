import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";

import { User } from "../_models/index";

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';
import { AuthenticationService } from ".";

@Injectable()
export class UserService {
   
    constructor(
        public db: AngularFirestore,
        public afAuth: AngularFireAuth
    ){
    }

    //get current user who logged in
    getCurrentUser(){
      return new Promise<any>((resolve, reject) => {
        var user = firebase.auth().onAuthStateChanged(function(user){
          if (user) {
            resolve(user);
          } else {
            reject('No user logged in');
          }
        })
      })
    }
}