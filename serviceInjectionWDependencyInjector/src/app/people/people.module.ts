import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  // providers: [PeopleService],
  declarations: [PeopleListComponent],
  exports: [PeopleListComponent]
})

export class PeopleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PeopleModule,
      providers: [PeopleService],
    }
  }
}
