import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a
        *ngFor="let nav of navs"
        [routerLink]="nav.url"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        >{{ nav.content }}
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a {
        text-decoration: none;
      }
      a.active {
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {
  navs = [
    { url: '', content: 'Home' },
    { url: 'contacts', content: 'Contacts' },
    { url: 'contacts/1', content: 'One' },
  ];
}
