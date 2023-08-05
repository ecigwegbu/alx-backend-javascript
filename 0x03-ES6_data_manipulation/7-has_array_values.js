#!/bin/node
// Check if a set contains all the elements of an array

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
