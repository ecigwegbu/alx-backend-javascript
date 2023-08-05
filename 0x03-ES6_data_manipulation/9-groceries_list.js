#!/bin/node
// Create groceries list
// const print = (...x) => console.log(...x); // custom print() function

export default function groceriesList() {
  return new Map()
    .set('Apples', 10)
    .set('Tomatoes', 10)
    .set('Pasta', 1)
    .set('Rice', 1)
    .set('Banana', 5);
}
