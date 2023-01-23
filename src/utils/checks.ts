export function getCustomError(value: string): string {
  switch (true) {
    case /[0-9a-z\(\)]\s*[/*\-+]\s*$/.test(value):
      return "You need values on both sides of an operator";
    case /^\s*[/*]/.test(value):
      return "Multiply and division operators can't be the first element";
    case /^\s*!/.test(value):
      return "Factorial operators can't be the first element";
    case /^\^/.test(value):
      return "You need a value before the exponent sign";
    case /abs|cos|sin|tan|sqrt/.test(value):
      return "Functions require arguments. For example: abs(-2)";
    default:
      return "Could not evaluate expression";
  }
}
