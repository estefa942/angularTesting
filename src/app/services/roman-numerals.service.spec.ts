import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return until V', () => {
    let number = 1;
    const result= ['I','II','III', 'IV', 'V']
    for(let i = 0; i < 5; i++){
      expect(service.convertToRomanos(number)).toEqual(result[i]);
      number++;
    }
  });

  it('should be return until X', () => {
    let number = 1;
    const result= ['I','II','III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    for(let i = 0; i < 10; i++){
      expect(service.convertToRomanos(number)).toEqual(result[i]);
      number++;
    }
  });

  it('should be return some numbers between X and C ', () => {
    const numbers = [13,26,35,42,54,68,71,89,97,100];
    const result= ['XIII','XXVI','XXXV','XLII', 'LIV', 'LXVIII', 'LXXI', 'LXXXIX', 'XCVII', 'C'];
    for(let i = 0; i < 10; i++){
      expect(service.convertToRomanos(numbers[i])).toEqual(result[i]);
    }
  });

  it('should be return some numbers between C and CCC ', () => {
    const numbers = [143,154,185,199,200,269,241,238,215,300];
    const result= ['CXLIII','CLIV','CLXXXV','CXCIX', 'CC', 'CCLXIX', 'CCXLI', 'CCXXXVIII', 'CCXV', 'CCC'];
    for(let i = 0; i < 10; i++){
      expect(service.convertToRomanos(numbers[i])).toEqual(result[i]);
    }
  });

  it('should be return some numbers between CCC and D ', () => {
    const numbers = [341,309,386,399,400,402,428,444,472,500];
    const result= ['CCCXLI','CCCIX','CCCLXXXVI','CCCXCIX', 'CD', 'CDII', 'CDXXVIII', 'CDXLIV', 'CDLXXII', 'D'];
    for(let i = 0; i < 10; i++){
      expect(service.convertToRomanos(numbers[i])).toEqual(result[i]);
    }
  });

  it('should be return some numbers between D and M ', () => {
    const numbers = [571,656,721,823,994,527,639,701,899,1000];
    const result= ['DLXXI','DCLVI','DCCXXI','DCCCXXIII', 'CMXCIV', 'DXXVII', 'DCXXXIX', 'DCCI', 'DCCCXCIX', 'M'];
    for(let i = 0; i < 10; i++){
      expect(service.convertToRomanos(numbers[i])).toEqual(result[i]);
    }
  });

});
