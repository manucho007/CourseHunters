import { Component, OnInit } from '@angular/core';
import { NewLoggerService } from '../services/new-logger.service';
@Component({
  selector: 'app-person',
  template: `
    <div>
      Logging component:
      <button (click)="doLog()">Log to console</button>
    </div>
  `,
})
export class PersonComponent implements OnInit {
  constructor(private logger:NewLoggerService) {  }

  ngOnInit() {}

  doLog(){
    this.logger.log('Message from PersonComponent');
  }
}
