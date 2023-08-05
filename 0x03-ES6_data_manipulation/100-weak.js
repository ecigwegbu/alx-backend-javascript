#!/bin/node
// Weak link data structure
// const print = (...x) => console.log(...x); // custom print() function

export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // update Weakmap:
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
  // check for high endpoint load
  if (weakMap.size === 5) {
    throw new Error('Endpoint load is high');
  }
}
