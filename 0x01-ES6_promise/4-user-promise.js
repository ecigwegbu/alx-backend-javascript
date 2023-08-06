// In this file, import uploadPhoto and createUser from utils.js

async function signUpUser (firstName, lastName) {
  try {
    const [result1, result2] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(result1.body, result2.firstName, result2.lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}
export default handleProfileSignup;
