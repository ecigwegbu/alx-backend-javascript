export default function returnHowManyArguments(...args) {
  let argCount = 0;
  args.forEach(() => { argCount += 1; });
  return argCount;
}
