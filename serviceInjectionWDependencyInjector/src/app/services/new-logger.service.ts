import { Injectable } from '@angular/core';
import {ConsoleWriterService} from './console-writer.service';
@Injectable()
export class NewLoggerService {
  constructor(private isEnabled:boolean, private writer: ConsoleWriterService) {  }
  log(msg:string){
    if(this.isEnabled){
      console.log(`New Logger: ${msg}`);
      this.writer.write(msg);
    }
  }
}
