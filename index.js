// Your code here


function mapToNegativize(newArray) {
  let myArray = []
  for (let i = 0; i < newArray.length; i++) {
    myArray.push(-1 * newArray[i])
  }
  return myArray
}

function mapToNoChange(sourceArray) {
  let myArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    myArray.push(sourceArray[i])
  }
  return myArray
}

function mapToDouble(array) {
  let myArray = []
  for (let i = 0; i < array.length; i++) {
    myArray.push(2 * array[i])
  }
  return myArray
}

function mapToSquare(array) {
  let myArray = []
  for (let i = 0; i < array.length; i++) {
    myArray.push(array[i] * array[i])
  }
  return myArray
}

function reduceToTotal(num, startingPoint = 0) {
  let total = startingPoint
  for (let i = 0; i < num.length; i++) {
    total = total + num[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (src[i]) return true
  }
  return false
}