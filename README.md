[![logo](http://aaroncolwill.com/external/xinq-logo.png?)]()

## Xinq - lightweight JS prototype extensions
Xinq gives you minimal impact javascript extensions similar to those seen in the C# ```System.Linq``` namespace.
Using Xinq can enable you to sort through data sets and filter specific results. Statements can be deferred in the same way as Linq and the syntax is similar.

## Usage Examples

1.  Checking to see if a string contains another string

``` js
var teststring = "here we have a nice test string";
var result = teststring.contains("this");
console.log(result); 
```

2.  Selecting results of an array that match a predicate

``` js
var testarray = ["hello", "this", "is", "a", "nice", "or", "nicely", "done", "test", "array!"];
var result = testarray.select((n) => n.contains("nice"));
console.log(result);
```

3.  Selecting and filtering results of an object array where 
    predicate is satisfied.

``` js
var testpeople = [
    { name: "bob", age: 21, sex: "male" },
    { name: "rob", age: 23, sex: "male" },
    { name: "ann", age: 57, sex: "female" },
    { name: "sean", age: 44, sex: "male" },
    { name: "clara", age: 24, sex: "female" },
]
var result =    testpeople
                .select((p) => p.sex == "male")         // select only males
                .where((p) => p.age >= 21)              // filter age over 21
                .where((p) => p.name.contains("ob"));   // where name contains "ob"
console.log(result);
```

