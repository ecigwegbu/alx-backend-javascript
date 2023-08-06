// return a promise
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responseArray) => console.log(
      responseArray[0].body,
      responseArray[1].firstName,
      responseArray[1].lastName,
    ))
    .catch(console.log('Signup system offline'));
}

export default handleProfileSignup;
