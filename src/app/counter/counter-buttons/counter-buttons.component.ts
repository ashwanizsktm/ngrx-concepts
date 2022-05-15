import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
  }

  onIncrement() {
  //  this.increment.emit();
   
  // implemmenting ngrx
  this.store.dispatch(increment())
  }

  onDecrement() {
    // this.decrement.emit()

    // implementing ngrx
    this.store.dispatch(decrement());
  }

  onReset() {
  // this.reset.emit()

  // implementing ngrx..
  this.store.dispatch(reset())

  }
}
