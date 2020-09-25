import {Component, ElementRef, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {CacheService} from '../services/cache.service';
import {EventService} from '../services/event.service';
import * as math from 'mathjs';

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

  public menuState = 'out';
  public inputString = '';
  public resultString = '';
  public calcHistory: {expression: string, value: number}[] = [];

  constructor(
    private elementRef: ElementRef,
    private cacheService: CacheService,
    private eventService: EventService,
    ) {  }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#112';
    this.cursorEffect();
    this.getHistoryFromCache();
  }

  private cursorEffect() {
    const border = this.elementRef.nativeElement.ownerDocument.querySelector('.highlight');
    this.elementRef.nativeElement.ownerDocument.querySelector('.calculator-container')
      .addEventListener('mousemove', (ev: any) => {
        const x = ev.pageX;
        const y = ev.pageY;
        const bounding = border.getBoundingClientRect();

        border.style.webkitMaskPosition = `${x - bounding.x - 160}px ${y - bounding.y - 160}px`;
      });
  }

  public toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  public input(char: string) {
    this.inputString += this.isOperator(char) && this.isOperator(this.inputString[this.inputString.length - 1]) ? '' : char;
  }

  public evaluateExpression() {
    this.corrigateInput();
    this.resultString = `= ${math.parse(this.inputString).evaluate()}`;
    this.cacheService.addCalcHistory(this.inputString);
    this.addToCalcHistory(this.inputString);
  }

  public deleteChar(): void {
    this.inputString = this.inputString.slice(0, -1);
    if ((this.isOperator(this.inputString[this.inputString.length - 1]) ||
      this.inputString[this.inputString.length - 1] === ' ') && this.inputString.length !== 0) {
      this.deleteChar();
    }
  }

  private getHistoryFromCache(): void {
    this.cacheService.getCalcHistory.forEach(value => this.calcHistory = [
      ...this.calcHistory, {expression: value, value: math.parse(value).evaluate()}
    ]);
  }

  public clearInput() {
    this.inputString = '';
  }

  private isOperator(char: string): boolean {
    return char === '/' || char === '*' || char === '+' || char === '-' || char === undefined;
  }

  private corrigateInput() {
    this.inputString = this.inputString.replace(/\s/g, '');
    this.inputString = this.inputString.replace(this.getSearchExpression(), (operator) => {
      return ` ${operator} `;
    });
  }

  private getSearchExpression(): RegExp {
    return /[+/*-]/gi;
  }

  private addToCalcHistory(resultString: string): void {
    this.calcHistory = [ {expression: resultString, value: math.parse(resultString).evaluate()}, ...this.calcHistory];
  }

  private historyEventHandler(history: {expression: string, value: number}): void {
    this.inputString = history.expression;
    this.evaluateExpression();
  }
}
