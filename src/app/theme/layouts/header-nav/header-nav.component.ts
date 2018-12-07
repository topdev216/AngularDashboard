import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AngularFireAuth } from 'angularfire2/auth';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {


    constructor(public afAuth: AngularFireAuth) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initHeader();
    }

}