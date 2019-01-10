# @ianwalter/promise-complete
> Call all promises in an array whether they resolve or reject

[![Npm page][npm-image]][npm-url]

## About

This is exactly like `Promise.all` except that it won't reject and stop promises
from being called. Resolve and rejection values are returned in the results
array in the same order as the promises were given so you can iterate over the
array and check/handle errors after all of the promises have resolved/rejected.

## Installation

```console
npm install --save promise-complete
```

## Usage

```js
Promise.complete = require('@ianwalter/promise-complete')

// Output all promise results to a results array:
const results = await Promise.complete([promise1, promise2])

// Log any results that are instances of Error:
results.filter(r => r instanceof Error).forEach(e => console.error(e))
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[npm-image]: https://img.shields.io/npm/v/@ianwalter/promise-complete.svg
[npm-url]: https://www.npmjs.com/package/@ianwalter/promise-complete
[licenseUrl]: https://github.com/ianwalter/promise-complete/blob/master/LICENSE
