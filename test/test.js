var xinq = require('../index.js');

/**
 *  Test data
 */
var teststring = "hello this is a test string";
var testarray = ["hello", "this", "is", "a", "nice", "nicely", "test", "array!"];
var testpeople = [
    { name: "bob", age: 21, sex: "male" },
    { name: "rob", age: 23, sex: "male" },
    { name: "ann", age: 57, sex: "female" },
    { name: "sean", age: 44, sex: "male" },
    { name: "clara", age: 24, sex: "female" },
]

/**
 *  Unit tests
 */

QUnit.test("string contains test", function(assert) {
    var contains_example = teststring.contains("this");   
    assert.ok(contains_example == true, "Passed!");
});

QUnit.test("array contains test", function(assert) {
    var contains_example = testarray.contains("nice");   
    assert.ok(contains_example == true, "Passed!");
});

QUnit.test("empty test", function(assert) {
    var contains_example = testpeople.select((p) => p.age > 24);  
    var empty = contains_example[0].isEmpty();
    assert.ok(empty == true, "Passed!");
});

QUnit.test("filter test", function(assert) {
    var filter_example =    testpeople
                            .select((p) => p.sex == "male")         // select only males
                            .where((p) => p.age >= 21)              // filter age over 21
                            .where((p) => p.name.contains("ob"));   // where name contains "ob"
    assert.ok(filter_example[1].name == "rob", "Passed!");
});