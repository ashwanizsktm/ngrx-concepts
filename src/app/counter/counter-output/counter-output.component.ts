import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  
  // @Input() counter!: number;
    //  counter!: number;

     counter$! : Observable<{counter:number}>

  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
      // without creating the seperate instance of state if any of 
      //  event triggered then both the observable will be fired.
      // To avoid that we create the seperate selector for the state.

      // this.store.select(getCounter).subscribe(counterVal => {
      //    this.counter = counterVal;

        //  console.log("counter observable called");
      // })

    // using async pipe
    this.counter$ = this.store.select('counter');
  }

}
