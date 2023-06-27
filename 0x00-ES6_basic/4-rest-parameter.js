export default function returnHowManyArguments(...args) {
  let argCount = 0;
  for (const arg of args) {
    argCount += 1;
  }
  return argCount;
}
