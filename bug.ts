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

processValue("hello"); // Works fine
processValue(123); // Works fine

// The following line will throw an error, because TypeScript cannot infer the type of the variable 'result'.
let result = Math.random() < 0.5 ? "hello" : 123;
processValue(result); // Error!