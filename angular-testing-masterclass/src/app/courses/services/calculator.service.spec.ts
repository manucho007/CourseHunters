import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

describe('CalculatorService', () => {
  let calculator: CalculatorService;
  it('should add two numbers', () => {
    console.log('add test');

    // const logger = new LoggerService();
    const logger = jasmine.createSpyObj('LoggerService', ['log', 'hello']);
    // spyOn(logger, 'log');
    // spyOn(logger, 'hello');
    calculator = new CalculatorService(logger);
    const result = calculator.add(2, 2);

    expect(result).toBe(4, 'Result is not the expected one');

    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.hello).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log', 'hello']);

    console.log('subtract test');

    calculator = new CalculatorService(logger);
    const result = calculator.subtract(2, 2);

    expect(result).toBe(0, 'unexpected subtraction result');

    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});

// import { CalculatorService } from './calculator.service';
// import { LoggerService } from './logger.service';
// import { TestBed } from '@angular/core/testing';

// describe('CalculatorService', () => {
//   let calculator: CalculatorService, loggerSpy: any;

//   beforeEach(() => {
//     console.log('Calling beforeEach');

//     loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

//     TestBed.configureTestingModule({
//       providers: [
//         CalculatorService,
//         { provide: LoggerService, useValue: loggerSpy },
//       ],
//     });

//     calculator = TestBed.get(CalculatorService);
//   });

//   it('should add two numbers', () => {
//     console.log('add test');

//     const result = calculator.add(2, 2);

//     expect(result).toBe(4, 'Result is not the expected one');

//     expect(loggerSpy.log).toHaveBeenCalledTimes(1);
//   });

//   it('should subtract two numbers', () => {
//     console.log('subtract test');

//     const result = calculator.subtract(2, 2);

//     expect(result).toBe(0, 'unexpected subtraction result');

//     expect(loggerSpy.log).toHaveBeenCalledTimes(1);
//   });
// });
