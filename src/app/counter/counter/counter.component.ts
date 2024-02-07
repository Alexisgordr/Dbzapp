import { Component } from '@angular/core';



@Component({
  selector: 'app-counter',
  template: `<h3>counter: {{counter}}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="refrescar()">Refrescar</button>
<button (click)="increaseBy(-1)">-1</button>


  `
})
export class CounterComponent {


public counter: number = 15;


public increaseBy(value:number)  {
this.counter += value;

}

public refrescar() {
this.counter = 10;
}



}

