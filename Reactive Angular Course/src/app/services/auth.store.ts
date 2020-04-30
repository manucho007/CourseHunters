import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { map, share, shareReplay, tap } from 'rxjs/operators';

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
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/api/login', { email, password })
      .pipe(
        tap((user) => this.subject.next(user)),
        shareReplay()
      );
  }

  logout() {
    this.subject.next(null);
  }
}
