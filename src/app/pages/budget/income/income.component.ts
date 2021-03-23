import { Component, OnInit, Input } from '@angular/core';
import { BudgetModel } from '../model/budget.model';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  income = 'Income';
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
