import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
    </div>
    <router-outlet> </router-outlet>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
