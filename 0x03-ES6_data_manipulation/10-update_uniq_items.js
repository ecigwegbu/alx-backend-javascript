#!/bin/node
// Create groceries list
// const print = (...x) => console.log(...x); // custom print() function
/*
export default function groceriesList() {
  return new Map()
    .set('Apples', 10)
    .set('Tomatoes', 10)
    .set('Pasta', 1)
    .set('Rice', 1)
    .set('Banana', 5);
*/

export default function updateUniqueItems(map) {
  if (!map) {
    throw new Error('Cannot process');
  }
  map.forEach((val, key, map) => {
    if (val === 1) {
      try {
        map.set(key, 100);
      } catch (error) {
	throw new Error('Cannot process');
      }
    }
  });
  return map;
}
