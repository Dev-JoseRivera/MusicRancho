import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private config: UserManagerSettings = {
    authority: "https://localhost:7003/",
    client_id: "music.angular",
    redirect_uri: "https://localhost:44427/auth-callback",
    post_logout_redirect_uri: "https://localhost:44427",
    response_type: "id_token token",
    scope: "music openid profile email read write delete",
    filterProtocolClaims: true,
    loadUserInfo: true
  }

  private _config: UserManagerSettings;
  private _userManager: UserManager;
  private _user?: User | null;
  private _userLoginSubject: Subject<boolean>;


  constructor() {
    this._config = this.config;
    this._userManager = new UserManager(this._config);
    this._userManager.getUser().then(user => {
      this._user = user;
    })
    this._userLoginSubject = new Subject<boolean>();
  }

  getUserLoggedInEvents(): Observable<boolean> {
    return this._userLoginSubject.asObservable();
  }

  isLoggedIn(): boolean {
    return this._user != null && !this._user.expired;
  }

  signIn(): Promise<void> {
    return this._userManager.signinRedirect();
  }

  completeSignIn(): Promise<void> {
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._userLoginSubject.next(this.isLoggedIn());
    });
  }

  signOut(): Promise<void> {
    return this._userManager.signoutRedirect();
  }

  completeSignOut(): Promise<void> {
    return this._userManager.signoutRedirectCallback().then(user => {
      this._user = null;
      this._userLoginSubject.next(this.isLoggedIn());
    });
  }

  getAuthorizationHeaderValue(): string {
    return `Bearer ${this._user?.access_token}`;
  }
}
