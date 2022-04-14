import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count$: Observable<number>

  constructor() { }

  increment():void {
    // TODO
  }

  decrement():void{
    // TODO
  }

  reset():void{
    // TODO
  }

}
