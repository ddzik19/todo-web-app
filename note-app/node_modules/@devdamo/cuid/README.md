# @devdamo/cuid

cuid is a javascript package that generates a random variable string id.

cuid gives you the option to generate id that contains numbers and letters,
generation of id that is only numbers and generation of id that is only letters

cuid stands for : customized unique id

## Installation

```
npm install @devdamo/cuid
```
```
npm i @devdamo/cuid
```

## Usage

```javascript
const cuid = require('@devdamo/cuid');

// generates an id that is 10 digits/letters long
cuit(10,1); // generates > r7pd7a55p0

// generates an id that is 10 numbers long and only numbers
cuid(10,2); // generates > 7621902562

// generates an id that is 10 numbers letters long and only letters
cuid(10,3); // generates > mletbuywgm
```

## Contributing
Please do not attempt to create pull requests or try to contribute.

## License
[MIT](https://choosealicense.com/licenses/mit/)