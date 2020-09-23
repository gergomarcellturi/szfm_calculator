import {Component, ElementRef, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class CalculatorComponent implements OnInit {

  menuState = 'out';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
