/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let amountOfTriangle = 0;

 for (let index = 0; index < preferences.length; index++) {
  const connect1 = preferences[index] - 1;
  const connect2 = preferences[connect1] - 1;
  const connect3 = preferences[connect2] - 1;

  if (index === connect3) {
    amountOfTriangle += 1;
  }
 }

  return Math.floor(amountOfTriangle / 3);
};
