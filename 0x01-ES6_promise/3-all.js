// In this file, import uploadPhoto and createUser from utils.js

// Knowing that the functions in utils.js return promises, use the prototype
// below to collectively resolve all promises and log body firstName lastName
// to the console.

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => console.log(result[0].body, result[1].firstName,
      result[1].lastName))
    .catch(() => console.error('Signup system offline'));
}
