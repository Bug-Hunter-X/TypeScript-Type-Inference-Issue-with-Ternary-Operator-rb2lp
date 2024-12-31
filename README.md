This repository demonstrates a type inference issue in TypeScript when using a ternary operator with different types. The `processValue` function correctly handles string and number types, but fails when the input type cannot be inferred due to a ternary expression.  The solution involves explicitly specifying the type using type assertions or by refactoring the code to use a union type.