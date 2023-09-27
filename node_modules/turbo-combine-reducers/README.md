# Turbo Combine Reducers

[![Build Status](https://travis-ci.org/aduth/turbo-combine-reducers.svg?branch=master)](https://travis-ci.org/aduth/turbo-combine-reducers)

Drop-in replacement for [Redux's `combineReducers`](https://redux.js.org/api/combinereducers), optimized for speed and bundle size.

Applying a technique of [partial evaluation](https://en.wikipedia.org/wiki/Partial_evaluation) by pre-compiling a reducer updater function, it achieves upwards of **82x improved performance** for an assumed typical real-world scenario (unchanging state for a medium-size object). See [Benchmarks](#benchmarks) for specific performance metrics.

Turbo Combine Reducers has no dependencies, and weighs in at **260 bytes** minified and gzipped.

## Installation

Using [npm](https://www.npmjs.com/) as a package manager:

```
npm install turbo-combine-reducers
```

Otherwise, download a pre-built copy from unpkg:

[https://unpkg.com/turbo-combine-reducers/dist/turbo-combine-reducers.min.js](https://unpkg.com/turbo-combine-reducers/dist/turbo-combine-reducers.min.js)

## Usage

As an imported package, the default export is the `combineReducers` function. If using the browser-ready distributable from unpkg, the same function is available at the `window.turboCombineReducers` global.

```js
import combineReducers from 'turbo-combine-reducers';
// Or:
// var combineReducers = window.turboCombineReducers;

const reducer = combineReducers( {
	count( state = 0, action ) {
		// ...
	},
} );
```

As it is intended to serve as a drop-in replacement, refer to the documentation of [Redux's `combineReducers`](https://redux.js.org/api/combinereducers) for usage instructions.

## Benchmarks

The following benchmarks are performed in Node 10.12.0 on a MacBook Pro (Late 2016), 2.9 GHz Intel Core i7.

```
turbo-combine-reducers - unchanging (4 properties) x 120,638,598 ops/sec ±0.37% (87 runs sampled)
turbo-combine-reducers - unchanging (20 properties) x 23,740,676 ops/sec ±1.20% (90 runs sampled)
turbo-combine-reducers - changing (4 properties) x 40,028,499 ops/sec ±0.82% (90 runs sampled)
turbo-combine-reducers - changing (20 properties) x 23,338,161 ops/sec ±0.86% (88 runs sampled)
redux - unchanging (4 properties) x 1,480,178 ops/sec ±0.42% (93 runs sampled)
redux - unchanging (20 properties) x 594,068 ops/sec ±0.39% (90 runs sampled)
redux - changing (4 properties) x 1,390,904 ops/sec ±0.28% (92 runs sampled)
redux - changing (20 properties) x 589,844 ops/sec ±0.47% (92 runs sampled)
```

## License

Copyright 2018 Andrew Duthie

Released under the [MIT License](./LICENSE.md).
