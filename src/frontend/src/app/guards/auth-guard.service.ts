import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if statement should be added here to determine if the user is logged in.
        // If so, true should be returned

        // not logged in so redirect to landing page with the return url
        this.router.navigate(['/landing']);
        return false;
    }
}
