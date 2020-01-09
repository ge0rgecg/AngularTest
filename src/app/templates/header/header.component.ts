import { Component, OnInit } from '@angular/core';
import { APP_NAME } from './../../app.const';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/models/user.model';
import { Globals } from 'src/app/app.globals';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    loggerUser: User;
    isLoggedUser = false;
    appName = APP_NAME;

    constructor(
        private userService: UserService,
        public globals: Globals,
        private authenticationService: AuthenticationService,
        private ngxSpinnerService: NgxSpinnerService
    ) { }

    ngOnInit() {

        this.userService.getById(10)
            .subscribe(
                (returnedUser: User) => this.loggerUser = returnedUser,
                (error: Error) => console.error(error),
                () => {
                    setTimeout(() => {
                        console.log('Complete');
                        this.ngxSpinnerService.hide();
                    }, 2000);

                }
            );

        this.subscribes();
    }

    onLogoff() {
        this.authenticationService.signOut();
    }

    private subscribes() {
        console.log('bananas');
        this.userService.isLoggedUserEmitter
            .subscribe(
              isLoggedUser => this.isLoggedUser = isLoggedUser
            );
    }
}
