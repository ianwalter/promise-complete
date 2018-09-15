module.exports = promises => {
  return new Promise(resolve => {
    let results = []
    const addResult = key => value => {
      results[key] = value
      if (results.length === promises.length) {
        resolve(results)
      }
    }
    for (const [key, promise] of promises.entries()) {
      const handler = addResult(key)
      promise.then(handler, handler)
    }
  })
}
