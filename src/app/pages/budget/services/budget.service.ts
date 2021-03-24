import { Injectable } from '@angular/core';
import { BudgetModel } from '../model/budget.model';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {
  budgetArray: BudgetModel[] = [];

  constructor() { }

  getBudgetData() {
    return this.budgetArray;
  }

  setBudgetData(item) {
    this.budgetArray.push(item);
  }

  deleteBudgetData(item) {
    this.budgetArray.splice(this.budgetArray.indexOf(item), 1)
  }

  getAllValues(): number {
    return this.budgetArray
      .map(value => Number(value.amount))
      .reduce((acc: number, curVal) => acc + curVal, 0);
  }
}