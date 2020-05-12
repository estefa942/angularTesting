import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {
  decimal= [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  romano= ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  constructor() { }

  convertToRomanos(number: number): string {
    let romano: string = '';
    for (let i = 12; i >= 0; i--) {
      while (number >= this.decimal[i]) {
        number = number - this.decimal[i];
        romano = romano + this.romano[i];
      }
    }
    return romano;
  }
}
