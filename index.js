var selectionsort = module.exports = function(arr, comparator) {
  if (!comparator) {
    comparator = function(a, b) {
      return a - b;
    };
  }

  if (arr.length <= 1) return arr;

  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], min) < 0) {
        min = arr[j];
        minIndex = j;
      }
    }

    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
};
