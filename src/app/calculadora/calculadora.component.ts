import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  result: number = 0;
  num1: number = 0;
  num2: number = 0;
  operator: string = '';

  calculate(): void {
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
      case '^':
        this.result = Math.pow(this.num1, this.num2);
        break;
      case '%':
        this.result = this.num1 % this.num2;
        break;
      default:
        this.result = 0;
    }
  }
}
