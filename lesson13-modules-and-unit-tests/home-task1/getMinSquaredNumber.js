export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length == []) {
    return null;
  }
  return Math.min(...arr.map((num) => num * num));
};
