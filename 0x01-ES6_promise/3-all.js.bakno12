// In this file, import uploadPhoto and createUser from utils.js

import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const [result1, result2] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(result1.body, result2.firstName, result2.lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}
export default handleProfileSignup;
