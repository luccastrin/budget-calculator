import { Component, OnInit, Input } from '@angular/core';
import { BudgetModel } from '../model/budget.model';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses = 'Expenses';
  @Input() items: BudgetModel;

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit(): void {
  }

  getBudgetArray() {
    this.budgetService.getBudgetData();
  }

  testingObjectLength(): any[] {
    return Object.keys(this.items);
  }

  deleteSelectedBudget(item) {
    this.budgetService.deleteBudgetData(item)
  }
}
