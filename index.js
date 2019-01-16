export default function promiseComplete (input) {
  const output = Array.isArray(input) ? [] : {}
  const isArray = Array.isArray(input)
  const inputLength = isArray ? input.length : Object.keys(input).length
  return new Promise(resolve => {
    const addResult = key => value => {
      output[key] = value
      const isFinished = Array.isArray(input)
        ? inputLength === output.length
        : inputLength === Object.keys(output).length
      if (isFinished) {
        resolve(output)
      }
    }
    const entries = isArray
      ? input.map((value, index) => [index, value])
      : Object.keys(input).map(key => [key, input[key]])
    for (const [key, promise] of entries) {
      const handler = addResult(key)
      if (promise.then) {
        promise.then(handler, handler)
      } else {
        handler(promise)
      }
    }
  })
}
