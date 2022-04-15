import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='route-list'>
      <nav class='item'>
        <a routerLink="/">Home</a>
      </nav>
      <nav class='item'>
        <a routerLink="/my-counter">my-counter(ngrx/store)</a>
      </nav>
      <nav class='item'>
        <a routerLink="/hero">hero(ngrx/data)</a>
      </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .route-list{
      display:flex;
      padding:30px;
    }
    .item{
      padding-right:15px;
    }
  `]
})
export class AppComponent {

}
