import { Component, OnInit } from '@angular/core';
import { BudgetModel } from './model/budget.model';

import { BudgetService } from './services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit(): void {
  }

  getBudgetData(): BudgetModel[] {
    // console.log('dados recebidos no budget ', this.budgetService);
    return this.budgetService.getBudgetData();
  }
}
