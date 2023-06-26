export default function taskBlock(trueOrFalse) {

  if (trueOrFalse) {
    task2 = true;
    task = false;
  }

  let task = false;
  let task2 = true;

  return [task, task2];
}
