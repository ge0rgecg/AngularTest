import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.const';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()
export class UserService {

    isLoggedUserEmitter = new EventEmitter<boolean>();

    constructor(
        private httpClient: HttpClient,
        private ngxSpinnerService: NgxSpinnerService
    ) {

    }

    getById(id: number): Observable<User> {
        this.ngxSpinnerService.show();

        return this.httpClient.get<User>(`${API_URL}/users/${id}`);
    }

    // getLoggedUser(): Observable<User> {
    //     const loggerUser = new User();
    //     loggerUser.id = 1;
    //     loggerUser.name = 'Joca';
    //     loggerUser.username = 'alfafa';

    //     const loggedUserObservable = new Observable(
    //         (observer: Observer<User>) => {
    //             observer.next(loggerUser);
    //             observer.complete();
    //         }
    //     );

    //     return loggedUserObservable;
    // }

}
