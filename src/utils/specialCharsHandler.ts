export function addOpenParanthesis(arr: string[], char: string): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push("(");
  arr = [...arr, ...nextChars, ")"];
  return arr;
}

export function addClosingParanthesis(arr: string[], char: string): string[] {
  const cursorPos = arr.indexOf("cursor");
  const previousChars = arr.splice(0, cursorPos + 1);
  arr = ["(", ...previousChars, ")"];
  return arr;
}
