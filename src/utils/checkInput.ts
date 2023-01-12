export default function checkInput(value: string): string {
  switch (true) {
    case /[a-z]/.test(value):
      return "Can't use letters";
    case /\d\s*[/*\-+]\s*$/.test(value):
      return "You need values on both sides of an operator";
    case /^\s*[/*]/.test(value):
      return "Multiply and division operators can't be the first element";
    case /^\s*!/.test(value):
      return "Factorial operators can't be the first element";
    case /^\^/.test(value):
      return "You need a value before the exponent";
    case value.length === 0:
      return "";
    default:
      return "valid";
  }
}
