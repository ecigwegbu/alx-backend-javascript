#!/usr/bin/node
// extract list elements that start with a giviven substring

import cleanSet from './8-clean_set';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit',
  'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit',
  'banana']), ''));
