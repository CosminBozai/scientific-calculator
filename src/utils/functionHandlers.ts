export function exponentiationByTwo(value: string): string {
  // check if there is a digit as the last char of the string
  return /\d\s*$/.test(value) ? "^2" : "2^2";
}
