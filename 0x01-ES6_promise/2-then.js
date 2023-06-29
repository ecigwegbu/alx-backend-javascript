// return a Promise with resolve and reject

function handleResponseFromAPI(promise) {
  promise
    .then(() => "{ status: 200, body: 'Success' }")
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
export default handleResponseFromAPI;
