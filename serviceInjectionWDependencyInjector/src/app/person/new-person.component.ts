import { Component, OnInit, Optional, Host, SkipSelf } from '@angular/core';
import { LoggerService, loggerFactory } from '../services/logger.service';
@Component({
  selector: 'app-new-person',
  template: `
    <div style="border:1px">
      <p *ngIf="logger === null">I don't have a logger</p>
      <p *ngIf="logger">I do have a logger</p>
      <button (click)="doLog()">Write log</button>
    </div>
  `,
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory('NewPersonComponent')
    }
  ]
})
export class NewPersonComponent implements OnInit {
  // originally looks for service on the global providers (AppModule)
  constructor(
    // With otional we may skip a service if it's not defined
    @Optional()
    // Will skip serach on own host, and will search on the parent(AppComponent)
      // @SkipSelf()
    // Will only look on this host
    @Host()
    public logger: LoggerService
  ) { }

  ngOnInit() { }
  doLog() {
    if (this.logger) {
      this.logger.log('Message from PersonComponent');
    } else {
      console.log('Sorry no logger available');
    };
  };
}
