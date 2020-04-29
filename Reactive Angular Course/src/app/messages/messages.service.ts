import { filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  private subject = new BehaviorSubject<string[]>([]);
  // Emits new value when we call showErrors and notifys the app when an error has occured
  erros$: Observable<string[]> = this.subject
    .asObservable()
    .pipe(filter((messages) => messages && messages.length > 0));
  showErrors(...errors: string[]) {
    this.subject.next(errors);
  }
}
