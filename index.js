export default function promiseComplete (input) {
  const isArray = Array.isArray(input)
  const output = isArray ? [] : {}
  const inputLength = isArray ? input.length : Object.keys(input).length
  const entries = isArray
    ? input.map((value, index) => [index, value])
    : Object.keys(input).map(key => [key, input[key]])
  const addResult = (key, resolve) => value => {
    output[key] = value
    const isFinished = isArray
      ? inputLength === output.length
      : inputLength === Object.keys(output).length
    if (isFinished) {
      resolve(output)
    }
  }

  return new Promise(resolve => {
    for (const [key, promise] of entries) {
      const handler = addResult(key, resolve)
      if (promise.then) {
        promise.then(handler, handler)
      } else {
        handler(promise)
      }
    }
  })
}
