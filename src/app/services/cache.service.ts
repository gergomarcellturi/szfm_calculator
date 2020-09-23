import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private calcHistorySubject: BehaviorSubject<string[]>;
  private calcHistory: Observable<string[]>;

  constructor() {
    this.calcHistorySubject = new BehaviorSubject<string[]>(JSON.parse(localStorage.getItem('calcHistory')).slice(0, 9) || []);
    this.calcHistory = this.calcHistorySubject.asObservable();
  }

  public get getCalcHistory(): string[] {
    return this.calcHistorySubject.value;
  }
}
