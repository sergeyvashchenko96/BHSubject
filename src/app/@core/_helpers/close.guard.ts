import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable()
export class CloseGuard implements CanActivate {
  constructor(
    private router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   return JSON.parse(localStorage.getItem('access') || 'false');
  }
}
