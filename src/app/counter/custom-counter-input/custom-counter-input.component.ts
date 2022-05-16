import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
   value!: number;
   channelName$!: Observable<string>;
  constructor(private store: Store<{counter: CounterState}>) { }
  @ViewChild('inputRef', {static:false}) input!: ElementRef;
  ngOnInit(): void {    
    this.getChannelName();
  }

  onAdd() {
    this.store.dispatch(customIncrement({value: Number(this.value)}));
    this.input.nativeElement.value = ""
  }

  getChannelName(){
    // subscribe way
    // this.store.select(getChannelName).subscribe(channelName => {
    //    this.channelName = channelName;
      //  console.log("channelName observable called");
    // })
    
      // async way
      this.channelName$ = this.store.select(getChannelName);
       
      // without creating the seperate instance of state if any of 
      //  event triggered then both the observable will be fired.
      // To avoid that we create the seperate selector for the state.
  }

  onChangeChannel() {
    this.store.dispatch(changeChannelName());
  }
}
