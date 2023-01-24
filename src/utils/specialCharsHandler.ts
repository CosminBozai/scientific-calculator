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

export function addSquarerootFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr = [...arr, "sqrt", ...addOpenParanthesis(nextChars)];
  return arr;
}

export function addRootFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr = [...arr, "3sqrt", ...addOpenParanthesis(nextChars)];
  return arr;
}

export function addSquareFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  if (arr[cursorPos - 1] == undefined || arr[cursorPos - 1] === " ") {
    const nextChars = arr.splice(cursorPos);
    arr = [...arr, "2", "^", "2", ...nextChars];
  } else {
    const nextChars = arr.splice(cursorPos);
    arr = [...arr, "^", "2", ...nextChars];
  }
  return arr;
}

export function addQuantifyFunc(arr: string[]): string[] {
  const cursorPos = arr.indexOf("cursor");
  if (arr[cursorPos - 1] == undefined || arr[cursorPos - 1] === " ") {
    const nextChars = arr.splice(cursorPos);
    arr = [...arr, "2", "^", ...nextChars];
  } else {
    const nextChars = arr.splice(cursorPos);
    arr = [...arr, "^", ...nextChars];
  }
  return arr;
}
