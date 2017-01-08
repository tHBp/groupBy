# groupBy [![Build Status](https://travis-ci.org/tHBp/groupBy.svg?branch=master)](https://travis-ci.org/tHBp/groupBy)

A tiny library to group array of objects based on multiple properties.<br>Ultra small, just `0.3KB` [minified+gzipped] and `1.38KB` [uncompressed source].

## Getting Started

If you are using npm
```
$ npm install --save group-object-array
```
or include `index.js` manually as<br>

`<script src="index.js" charset="utf-8"></script>`

## Usage

```javascript
const groupBy = require('group-object-array');

var result = groupBy([{"a":1,"b":{"c":"C"}},{"a":2,"b":{"c":"D"}},{"a":1,"b":{"c":"C"}},{"a":1,"b":{"c":"A"}}], 'a');
          or groupBy(test, ['a', 'b.c']);
//groupBy(test, ['a', 'b.c']) returns
[{"key":"1","children":[{"key":"C","children":[{"a":1,"b":{"c":"C"}},{"a":1,"b":{"c":"C"}}]},{"key":"A","children":[{"a":1,"b":{"c":"A"}}]}]},{"key":"2","children":[{"key":"D","children":[{"a":2,"b":{"c":"D"}}]}]}]
```
For browser environments, the library exports a global `arrayGroup`, which can be used in a similar fashion,
```js
arrayGroup(test, ['a', 'b.c']);
// returns the grouped 'test' array
```

## API

### groupBy(array [, order [, transform ]])

Groups and returns an array.

#### array

Type: `Array`<br>
Default: none

Array to be grouped.

#### order

Type: `String | Array`<br>
Default: none

The priority order which grouping is to be performed. A single string value or array of strings.

#### transform

Type: `Function`<br>
Default: none

The transformation function to be applied to keys on which grouping is specified.<br/>
It is a function which accepts the object from input array and returns an array of specifying transformation for each key level.<br>
For example,<br/>
`groupBy(test, ['a', 'b.c' ...], function(item){
  return [item.toString() + '~key~1', f(item.property)...]
})`<br/>
where `f` is any transformation function.<br/>
Note that transformation is applied at the output result for transforming input to a consumable output. If used, transformation must be specified for each key level.
## License

MIT © [The Half Blood Prince](mailto://thehalfbloodprince.github@gmail.com)
