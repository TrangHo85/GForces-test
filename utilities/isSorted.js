/**
 * Returns true of false, indicating whether the given array is sorted in ascending or descending order
 * @param  {Array} array the array to check
 * @param  {String} sortOrder can be 'asc' to check ascending order, "desc" to check descending
 */
module.exports = function isSorted(array, sortOrder) {
  let sorted = false;
  if (sortOrder === "asc")
    sorted = array.every((val, i, arr) => !i || val >= arr[i - 1]);
  else sorted = array.every((val, i, arr) => !i || val <= arr[i - 1]);

  if (sorted === false)
    throw new Error(`it's not sorted in ${sortOrder} order`);
  else return sorted;
};
