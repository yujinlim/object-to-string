# Object to String
> parse object to human readable string

## Install
```
npm install --save object-to-string
```

## Usage
```js
var objectToString = require('object-to-string');

var result = objectToString({ foo: 'bar', hello: 'world'}, { keySeparator: ':', attrSeparator: ',' });
//=> foo: bar, hello: world
```

## API
### objectToString(input, options)
return parsed string from object

#### input

*Required*  
Type: `object`
object to parse

#### options

Type: `object`
Parsing parameters

#### options.keySeparator

Type: `String`
separator between key and value

#### options.attrSeparator

Type: `String`
separator between attributes

## License
MIT © [Yu Jin Lim](https://github.com/yujinlim)
