# array.prototype.pureSplice()

Array method to return a new array with a specified number of elements removed.  Unlike JavaScript's native array.splice() method, array.pureSplice does *not* modify the source array.


##Issues with JavaScript's native splice()
Running the code below, using JavaScript's native .splice() method, the original array is actually modified.  This could cause unintended side effects if you're not aware of this behaviour.  Also, the .splice() method actually returns an array *of* the elements that you removed, rather than an array *without* those elements.  Again, this is not that useful, IMHO.
```javascript
var sourceArray = ["wombat", "koala", "emu", "kookaburra"]
var newArray = sourceArray.splice(1, 1);    // Should return 'koala' as the single item in the new array
console.log(JSON.stringify(newArray)); // ["koala"]
console.log(JSON.stringify(sourceArray)); // ["wombat", "emu", "kookaburra"].
  ```

##Using pureSplice()

###Syntax
```javascript
var newArray = sourceArray.pureSplice(start, deleteCount);
  ```
*start:* index at which you want to start dropping elements.  Remember, JavaScript array counts are zero-based, so element 1 is actually the second element in the array.

*deleteCount:* How many elements you want to drop from the array.

###Example
Running the same code below, substituting .pureSplice() for .splice(), returns a new array with the specified elements removed.  Crucially, the source array is not changed:
```javascript
var sourceArray = ["wombat", "koala", "emu", "kookaburra"]
var newArray = sourceArray.pureSplice(1, 1);    // Should remove 'koala' from returned newArray
console.log(JSON.stringify(newArray)); // ["wombat", "emu", "kookaburra"]
console.log(JSON.stringify(sourceArray)); // ["wombat", "koala", "emu", "kookaburra"]

  ```

##Development Instructions
First run `npm install` to update the dev dependencies, basically the Babel command line tool and its dependences.

The source code is in the src/getsourcearray.js file, and is in ES2015 (aka ES6) format.  Run `npm run build` to have Babel transpile the code to es5 format to the project's main file, i.e. index.js in the root.

The source code uses [ES2015's array spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator), together with JavaScript's native .slice() method (not to be confused with the .splice() method!).  I lifted this idea from [one of Dan Abramov's free Redux videos on Egghead](https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread).


##Tests
Tests are built with mocha + chai.  Run with `npm test`.

Tests check that a new array can be returned from a source array with:

1. A single element removed in the returned array
1. The source array remaining unchanged.


