import { Component } from '@angular/core';
import { RomanNumeralsService } from './services/roman-numerals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTesting';
  number:number;
  romano:string;

  constructor(private romanService: RomanNumeralsService){

  }

  convertToRomano(){
    this.romano = this.romanService.convertToRomanos(this.number);
  }
}
