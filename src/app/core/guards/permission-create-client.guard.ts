import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionCreateClientGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  tokenInfo = this.authService.getDecodedAccessToken(localStorage.getItem("token"));
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.tokenInfo['role'] == "director") {
        return true;
      } else {
        this.router.navigate(['layout']);
      }
  }
  
}
