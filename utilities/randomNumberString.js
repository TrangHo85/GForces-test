module.exports = function randomNumberString(number = 15) {
  return Math.random().toString(36).substring(2, number).toUpperCase();
};
