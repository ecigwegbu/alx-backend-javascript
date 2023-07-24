// In this file, import uploadPhoto and createUser from utils.js

import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const result = await Promise.all([uploadPhoto(), createUser()]);
    console.log(result[0].body, result[1].firstName, result[1].lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}
export default handleProfileSignup;
