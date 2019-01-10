export default function promiseComplete (input) {
  const output = Array.isArray(input) ? [] : {}
  const inputLength = Array.isArray(input)
    ? input.length
    : Object.keys(input).length
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
    for (const [key, promise] of Object.entries(input)) {
      const handler = addResult(key)
      promise.then(handler, handler)
    }
  })
}
