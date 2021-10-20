const sortedArr = [1, 3, 5, 8, 9, 12, 15, 19, 40];
const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.round((start + end) / 2);
    if (arr[middle] === key) {
      return middle;
    }
    if (arr[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch(sortedArr, 8));
