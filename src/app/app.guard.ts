import { ActivatedRouteSnapshot, CanLoad, CanActivate, Route, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AppGuard implements CanActivate, CanLoad {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canLoad(route: Route): boolean {
        return this.authenticationService.isLoggedIn();
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const canActivate = this.authenticationService.isLoggedIn();
        if (canActivate) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}
