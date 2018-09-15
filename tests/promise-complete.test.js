Promise.complete = require('../')

test('returns all results whether promise resolves or rejects', () => {
  const error = new Error('Something went wrong!')
  const p1 = () => Promise.resolve(1)
  const p2 = () => Promise.reject(error)
  const p3 = () => Promise.resolve(3)
  Promise.complete([p1, p2, p3]).then(results => {
    expect(results).toEqual([1, error, 3])
  })
})
