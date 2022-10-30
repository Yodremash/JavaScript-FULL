export const reverseArray = (arr) =>
  !Array.isArray(arr) || arr.length == 0 ? null : arr.slice().reverse();
