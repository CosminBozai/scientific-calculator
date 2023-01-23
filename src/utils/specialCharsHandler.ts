export function addOpenParanthesis(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push("(");
  arr = [...arr, ...nextChars, ")"];
  return arr;
}

export function addClosingParanthesis(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const previousChars = arr.splice(0, cursorPos + 1);
  arr = ["(", ...previousChars, ")"];
  return arr;
}

export function addAbsFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push("abs");
  arr = [...arr, ...addOpenParanthesis(nextChars)];
  return arr;
}

export function addSinFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push("sin");
  arr = [...arr, ...addOpenParanthesis(nextChars)];
  return arr;
}

export function addCosFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push("cos");
  arr = [...arr, ...addOpenParanthesis(nextChars)];
  return arr;
}

export function addTanFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push("tan");
  arr = [...arr, ...addOpenParanthesis(nextChars)];
  return arr;
}

export function addSqrtFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push("sqrt");
  arr = [...arr, ...addOpenParanthesis(nextChars)];
  return arr;
}
