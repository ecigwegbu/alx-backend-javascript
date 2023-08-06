// Simple Promise

function signUpUser(firstName, lastName) {
  const obj = {
    firstName,
    lastName,
  };
  return Promise.resolve(obj);
}
export default signUpUser;
