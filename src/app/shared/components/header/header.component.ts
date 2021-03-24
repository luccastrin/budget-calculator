import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from 'src/app/pages/budget/services/budget.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'budget calculator';
  formBudget: FormGroup;

  constructor(
    private form: FormBuilder,
    private budgetService: BudgetService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formBudget = this.form.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  validatingForm(type: string) {
    let touched = this.formBudget.get(type).touched;
    let valid = this.formBudget.get(type).valid;

    if (touched) {
      return touched && valid ? 'success' : 'error';
    }
  }

  stylingButton() {
    return this.formBudget.valid ? 'success' : 'error';
  }

  mappingBudgetForm() {
    return {
      amount: this.formBudget.get('amount').value,
      description: this.formBudget.get('description').value
    }
  }

  changeNumberColour() {
    let number = this.budgetService.getAllValues();

    return number >= 0 ? 'greater' : 'less';
  }

  sendData() {
    let listaBudget = this.mappingBudgetForm();
    this.budgetService.setBudgetData(listaBudget);

    console.log('array ', this.budgetService.budgetArray);
    console.log('mapeado ', this.budgetService.getAllValues())
    // this.formBudget.patchValue({
    //   amount: '',
    //   description: ''
    // })
  }

  getBudget() {
    return this.budgetService.getAllValues();
  }
}
