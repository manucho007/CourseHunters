import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleWriterService {
  constructor() {  }
  public write(msg:string){
    console.log(msg);
  }
}
