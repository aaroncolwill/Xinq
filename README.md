[![logo](http://aaroncolwill.com/external/xinq-logo.png?)]()

## Xinq - lightweight JS prototype extensions

Xinq gives you minimal impact javascript extensions similar to those seen in the C# ```System.Linq``` namespace.
Using Xinq can enable you to sort through data sets and filter specific results. Statements can be deferred in the same way as Linq and the syntax is similar.

## Installation

```
npm install xinq --save
```

## Require

``` js
var xinq = require('xinq').init(); // must call init
```

## Usage Examples

Checking to see if a string contains another string

``` js
var xinq = require("xinq").init(); // must call init
var teststring = "this string allows testing of contains";
var result = teststring.contains("allows");
```

Selecting results of an array that match a predicate

``` js
var xinq = require("xinq").init(); // must call init
var stuff = ["cat", "dog", "mouse", "horse", "dragon", "house" ];
var result = stuff.select((n) => n.contains("ouse"));
```

Selecting and filtering results of an object array where 
predicate is satisfied.

``` js
var xinq = require("xinq").init(); // must call init
var staff = 
[
    {   name: "alan",     age: 21,    remote: false   },
    {   name: "allen",    age: 23,    remote: true    },
    {   name: "ruby",     age: 44,    remote: true    },
    {   name: "chris",    age: 58,    remote: true    }
]

var result = staff
             .select((p) => p.remote)
             .where((p) => p.age >= 24);
```

## Contributing

Add unit tests for any new or changed functionality. Lint and test please.

## Release History

* 0.1.0 - Initial Release