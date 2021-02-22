
exports.min = function min (array) {
  let min = 0;
  if (Array.isArray(array) && array.length > 0){
    for (let elem of array) if (elem < min) min = elem;
    return min;
  } else return 0;
  
}

exports.max = function max (array) {
  let max = 0;
  if (Array.isArray(array) && array.length > 0){
    for (let elem of array) if (elem > max) max = elem;
    return max;
  } else return 0;
}

exports.avg = function avg (array) {
  let sum = 0;
  if (Array.isArray(array) && array.length > 0){
  for (let elem of array) sum+= elem;
  return sum/array.length;
  } else return 0;
}
