import handleProfileSignup from './6-final-user';

async function test() {
  const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
  console.log(queue);
  // console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
}

test();
