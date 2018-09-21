/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let trianglesCount = 0;
  for (let i = 0; i < preferences.length; i++) {
    let angleA = preferences[i];
    let angleB = preferences[angleA - 1];
    let angleC = preferences[angleB - 1];
    if (angleA != angleB && angleB != angleC && angleA > (i + 1) && angleB > (i + 1) && angleC == (i + 1)) {
      trianglesCount++;
    }
  }
  return trianglesCount;
}
