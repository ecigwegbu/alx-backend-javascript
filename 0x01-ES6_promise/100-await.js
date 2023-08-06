// 10.Await/Async
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const result = await Promise.all([uploadPhoto(), createUser()]);
    return ({
      photo: result[0],
      user: result[1],
    });
  } catch (_) {
    return ({
      photo: null,
      user: null,
    });
  }
}

export default asyncUploadUser;
