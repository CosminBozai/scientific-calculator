export function moveCursorRight(arr: string[]): string[] {
  const cursorIndex = arr.indexOf("cursor");
  const x = arr[cursorIndex + 1];
  arr[cursorIndex + 1] = "cursor";
  arr[cursorIndex] = x;
  return arr;
}

export function moveCursorLeft(arr: string[]): string[] {
  const cursorIndex = arr.indexOf("cursor");
  const x = arr[cursorIndex - 1];
  arr[cursorIndex - 1] = "cursor";
  arr[cursorIndex] = x;
  return arr;
}

export function addCharAtCursor(arr: string[], char: string): string[] {
  const cursorPos = arr.indexOf("cursor");
  const nextChars = arr.splice(cursorPos);
  arr.push(char);
  arr = [...arr, ...nextChars];
  return arr;
}

export function deleteCharAtCursor(arr: string[]): string[] {
  if (arr.indexOf("cursor") !== 0)
    arr = [
      ...arr.slice(0, arr.indexOf("cursor") - 1),
      ...arr.slice(arr.indexOf("cursor")),
    ];
  return arr;
}
