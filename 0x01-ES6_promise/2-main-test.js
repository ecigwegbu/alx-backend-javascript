import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
handleResponseFromAPI(promise);



// return a Promise with resolve and reject

function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: 'Success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
export default handleResponseFromAPI;




import handleResponseFromAPI from "./2-then";

test("handleResponseFromAPI return the right response on resolve", () => {
  const promise = Promise.resolve();

  const successResponse = handleResponseFromAPI(promise);
  return expect(successResponse).resolves.toEqual({
    body: 'success',
    status: 200
  });
});
