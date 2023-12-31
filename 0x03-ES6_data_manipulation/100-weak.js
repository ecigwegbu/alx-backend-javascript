#!/bin/node
// Weak link data structure
// const print = (...x) => console.log(...x); // custom print() function

export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    if (count === 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
