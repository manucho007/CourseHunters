import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { map, share, shareReplay, tap } from 'rxjs/operators';
const // Key to save and retreive data from Local Storage
  AUTH_DATA = 'auth_data';
@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private subject = new BehaviorSubject<User>(null);
  // Observable of the user
  user$: Observable<User> = this.subject.asObservable();
  // Observavble to emit boolena values if loggedin
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
    // Checks the existence of the user in localStorage
    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      // Emits the value of the user in the subject
      this.subject.next(JSON.parse(user));
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/api/login', { email, password })
      .pipe(
        tap((user) => {
          this.subject.next(user);
          //   Saves the user data in localStorage to save his data at refreshpage
          localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }),
        shareReplay()
      );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
