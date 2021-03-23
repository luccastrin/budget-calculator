import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetComponent } from './budget.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';

@NgModule({
  declarations: [
    BudgetComponent,
    IncomeComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BudgetComponent,
    IncomeComponent,
    ExpensesComponent
  ],
  providers: [],
})
export class BudgetModule { }
