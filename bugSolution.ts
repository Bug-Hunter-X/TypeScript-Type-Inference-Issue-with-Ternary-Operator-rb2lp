function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

function processValue(value: string | number): void {
  if (typeof value === 'string') {
    printString(value);
  } else {
    printNumber(value);
  }
}

// Solution 1: Type Assertion
let result1 = (Math.random() < 0.5 ? "hello" : 123) as string | number;
processValue(result1); // Works fine

// Solution 2: Explicit Union Type
let result2: string | number = Math.random() < 0.5 ? "hello" : 123;
processValue(result2); // Works fine

// Solution 3: Refactoring with Union Type from the start
function processValue2(value: string | number): void {
    console.log(value);
}

let result3 = Math.random() < 0.5 ? "hello" : 123;
processValue2(result3); // Works fine