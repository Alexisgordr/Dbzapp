import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ] // Add the missing exports property with an empty array
})
export class CounterModule { } // Add the missing closing bracket
