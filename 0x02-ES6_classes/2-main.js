import HolbertonCourse from './2-hbtn_course';

//const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
const c1 = new HolbertonCourse("PHP", 20, ["Lucie", "Guillaume"]);
c1.name = 'PHP2'
c1.length = 10;
c1.students = ['Thomas'];
console.log(c1.name);
console.log(c1.length)
console.log(c1.students);
console.log('############################');
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
  console.log(c1);
} catch (err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
  console.log(c2);
} catch (err) {
  console.log(err);
}
