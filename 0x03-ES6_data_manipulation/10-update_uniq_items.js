#!/bin/node
// Create groceries list
// const print = (...x) => console.log(...x); // custom print() function

export default function updateUniqueItems(map) {
  if (!(map && (map instanceof Map))) {
    throw new Error('Cannot process');
  }
  map.forEach((val, key, map) => {
    if (val && val === 1) {
      try {
        map.set(key, 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  });
  return map;
}
