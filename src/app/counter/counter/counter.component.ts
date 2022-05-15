import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  
    // not required while implementing ngrx.
  // counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // not required while implementing ngrx.

  // onIncrement(){
  //  this.counter++;
  // }

  // onDecrement() {
  //   this.counter--;
  // }

  // onReset() {
  //   this.counter = 0;
  // }

}
