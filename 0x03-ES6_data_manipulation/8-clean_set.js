#!/bin/node
// extract elements starting from a substring from an array
// const print = (...x) => console.log(...x); // custom print() function

export default function cleanSet(set, startString) {
  if (!startString || !set || (typeof startString !== 'string')) {
    return '';
  }
  let str = '';
  const array = Array.from(set);
  array.forEach((element) => {
    if (element.startsWith(startString)) {
      str += `-${element.slice(startString.length)}`;
    }
  });
  return str.slice(1);
}
