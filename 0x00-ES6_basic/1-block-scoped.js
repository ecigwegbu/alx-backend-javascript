export default function taskBlock(trueOrFalse) {
  var task2 = false;
  var task = true;

  if (trueOrFalse) {
    task2 = true;
    task = false;
  }

  return [task, task2];
}
