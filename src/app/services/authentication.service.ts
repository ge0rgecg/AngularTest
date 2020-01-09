import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

import { Globals } from './../app.globals';
import { User } from './../models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AuthenticationService {

    authenticatedUserEmitter = new EventEmitter<boolean>();

    private authenticatedUser = false;

    constructor(
        private globals: Globals,
        private router: Router,
        private userService: UserService,
        private ngxSpinnerService: NgxSpinnerService
    ) { }

    signIn(username: string, password: string) {
        console.log('chegou auqi');
        if (username === 'admin@json.com' && password === '1234') {
            this.userService.getById(10)
                .subscribe(
                    (loggedUser: User) => {
                        this.globals.LoggedUser = loggedUser;
                        this.userService.isLoggedUserEmitter.emit(true);
                        this.authenticatedUser = true;

                        this.router.navigate(['home']);
                    },
                    (error: Error) => console.error(error),
                    () => {
                        setTimeout(() => {
                            this.ngxSpinnerService.hide();
                        }, 2000);
                    }
                );
        } else {
            this.signOut();
        }
    }

    signOut() {
        this.globals.LoggedUser = null;
        this.userService.isLoggedUserEmitter.emit(false);
        this.authenticatedUser = false;

        this.router.navigate(['login']);
    }

    isLoggedIn(): boolean {
        return this.authenticatedUser;
    }

}
