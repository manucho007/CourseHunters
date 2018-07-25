import { Injectable } from '@angular/core';

@Injectable()
export class NewLoggerService {
  constructor(private isEnabled:boolean) {  }
  log(msg:string){
    if(this.isEnabled){
      console.log(`New Logger: ${msg}`);
    }
  }
}
