export default function appendToEachArrayValue(array, appendString) {
  for (let elt of array) {
    elt = (appendString += elt);
  }

  return array;
}
