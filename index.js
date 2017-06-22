/*
 *  Xinq - Aaron Colwill 2017   
 *  A simple extension module for primitive types
 */

/**
 *  Return bool if string is empty or contains only
 *  whitespace.
 */
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

/**
 *  Return bool if string contains other string
 */
String.prototype.contains = function(predicate) {
    if(this.indexOf(predicate) != -1) return true;
    else return false;
}

/**
 *  Return bool if array contains match.
 */
Array.prototype.contains = function(match) {
    var res = false;
    this.forEach((value, index, array) => {
        if(value.toString().contains(match)) res = true;
    });
    return res;
}

/**
 *  Returns filtered collection
 */
Array.prototype.where = function(predicate) {
    var _tmparr = [];
    this.forEach((value, index, array) => {
        if(predicate(value)) {
            _tmparr.push(value);
        }
    });
    return _tmparr;
}

/**
 *  Returns a collection of the same size matching predicate
 */
Array.prototype.select = function(predicate) {
    var _tmparr = [];
    this.forEach((value, index, array) => {
        if(predicate(value)) {
            _tmparr[index] = value;
        } else {
            _tmparr[index] = "";
        }
    });
    return _tmparr;
}