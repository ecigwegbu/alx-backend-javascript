// return a promise
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then((responseArray) => console.log(
      responseArray[0].value.body,
      responseArray[1].value.firstName,
      responseArray[1].value.lastName,
    ))
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
