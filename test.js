import test from 'ava'
import complete from '.'

test('returns all results whether promise resolves or rejects', async t => {
  const error = new Error('Something went wrong!')
  const p1 = new Promise(resolve => resolve(1))
  const p2 = new Promise((resolve, reject) => reject(error))
  const p3 = new Promise(resolve => resolve(3))
  const result = await complete([p1, p2, p3])
  t.deepEqual(result, [1, error, 3])
})

test('accepts a map of promises and returns a result map', async t => {
  const singer = 'Robyn'
  const error = new Error('Something went wrong!')
  const p1 = Promise.resolve(singer)
  const p2 = Promise.reject(error)
  const result = await complete({ p1, p2 })
  t.deepEqual(result, { p1: singer, p2: error })
})
