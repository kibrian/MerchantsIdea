import { Component } from '@angular/core';

@Component({
  selector: 'UI',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let articles of articles">{{ articles }}</li>
    </ul>
  `,
})
export class UserComponent {
  title = 'Content';

  articles = ['article1', 'article2', 'article3'];
}
