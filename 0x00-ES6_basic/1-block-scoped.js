export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task2 = true;
    let task = false;
  }

  return [task, task2];
}
