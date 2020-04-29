import { MessagesService } from './messages.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // flag to toggle errors
  showMessages = false;

  // Observable of errors at component level
  errors$: Observable<string[]>;
  constructor(public messagesService: MessagesService) {
    console.log('Created messages component');
  }

  ngOnInit() {
    // Gets notfified when an error occurs
    this.errors$ = this.messagesService.erros$.pipe(
      // Triggers the panel in the HTML
      tap(() => (this.showMessages = true))
    );
  }

  onClose() {
    this.showMessages = false;
  }
}
