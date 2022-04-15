import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: 'my-counter', component: MyCounterComponent },
  { path: 'hero', component: HeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
