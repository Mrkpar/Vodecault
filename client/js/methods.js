export const methodTopics = [
  {
    "id": "tti-method-array-methods-at",
    "title": ".at()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the element at an index. Negative indexes count backwards from the end."
      },
      {
        "title": "Example",
        "content": "const letters = ['a', 'b', 'c'];\nletters.at(-1)"
      },
      {
        "title": "Result",
        "content": "'c'"
      },
      {
        "title": "Remember",
        "content": "Useful when you want the last element without writing array[array.length - 1]."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-concat",
    "title": ".concat()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Combines arrays and returns a new array. It does not change the original arrays."
      },
      {
        "title": "Example",
        "content": "const first = [1, 2];\nconst combined = first.concat([3, 4]);"
      },
      {
        "title": "Result",
        "content": "[1, 2, 3, 4]"
      },
      {
        "title": "Remember",
        "content": "You can also use the spread syntax: [...first, ...second]."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-entries",
    "title": ".entries()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns an iterator containing [index, value] pairs."
      },
      {
        "title": "Example",
        "content": "const letters = ['a', 'b'];\nfor (const [index, value] of letters.entries()) {\n  console.log(index, value);\n}"
      },
      {
        "title": "Result",
        "content": "0 'a'\n1 'b'"
      },
      {
        "title": "Remember",
        "content": "Useful when a loop needs both the index and the value."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-every",
    "title": ".every()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns true only if every element passes the test."
      },
      {
        "title": "Example",
        "content": "[2, 4, 6].every(number => number % 2 === 0)"
      },
      {
        "title": "Result",
        "content": "true"
      },
      {
        "title": "Remember",
        "content": "An empty array returns true because there is no element that fails the test."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-fill",
    "title": ".fill()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Replaces elements in the original array with the same value."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 2, 3];\nnumbers.fill(0);"
      },
      {
        "title": "Result",
        "content": "[0, 0, 0]"
      },
      {
        "title": "Remember",
        "content": "Mutates the original array."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-filter",
    "title": ".filter()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns a new array containing every element that passes a condition."
      },
      {
        "title": "Example",
        "content": "const numbers = [2, 5, 8, 11];\nconst even = numbers.filter(number => number % 2 === 0);"
      },
      {
        "title": "Result",
        "content": "[2, 8]"
      },
      {
        "title": "Remember",
        "content": "Use it to keep all matches. It does not change the original array."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-find",
    "title": ".find()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the first element that passes a condition. If nothing matches, it returns undefined."
      },
      {
        "title": "Example",
        "content": "const numbers = [3, 8, 12, 15];\nconst found = numbers.find(number => number > 10);"
      },
      {
        "title": "Result",
        "content": "12"
      },
      {
        "title": "Remember",
        "content": "Use find when you need one matching value. Use filter when you need all matching values."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-findindex",
    "title": ".findIndex()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the index of the first element that passes a condition. Returns -1 if no element matches."
      },
      {
        "title": "Example",
        "content": "const numbers = [3, 8, 12];\nnumbers.findIndex(number => number > 10)"
      },
      {
        "title": "Result",
        "content": "2"
      },
      {
        "title": "Remember",
        "content": "Returns a position, not the element itself."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-findlast",
    "title": ".findLast()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the last element that passes a condition."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 4, 7, 2];\nnumbers.findLast(number => number > 3)"
      },
      {
        "title": "Result",
        "content": "7"
      },
      {
        "title": "Remember",
        "content": "Searches from right to left."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-findlastindex",
    "title": ".findLastIndex()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the index of the last element that passes a condition. Returns -1 if no match exists."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 4, 7, 2];\nnumbers.findLastIndex(number => number > 3)"
      },
      {
        "title": "Result",
        "content": "2"
      },
      {
        "title": "Remember",
        "content": "Searches from right to left and returns an index."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-flat",
    "title": ".flat()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Creates a new array with nested arrays flattened by one level by default."
      },
      {
        "title": "Example",
        "content": "const nested = [1, [2, 3], [4]];\nnested.flat()"
      },
      {
        "title": "Result",
        "content": "[1, 2, 3, 4]"
      },
      {
        "title": "Remember",
        "content": "Pass Infinity to flatten all nesting levels: nested.flat(Infinity)."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-flatmap",
    "title": ".flatMap()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Maps each element and then flattens the result by one level."
      },
      {
        "title": "Example",
        "content": "[1, 2].flatMap(number => [number, number * 2])"
      },
      {
        "title": "Result",
        "content": "[1, 2, 2, 4]"
      },
      {
        "title": "Remember",
        "content": "A combination of map() followed by flat(1)."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-foreach",
    "title": ".forEach()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Runs a callback once for every element. It returns undefined, not a new array."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 2, 3];\nnumbers.forEach(number => console.log(number));"
      },
      {
        "title": "Result",
        "content": "Logs 1, then 2, then 3"
      },
      {
        "title": "Remember",
        "content": "Use forEach for an action. Use map when you want a new array of transformed values."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-array-from",
    "title": "Array.from()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Creates a new array from an iterable or array-like value."
      },
      {
        "title": "Example",
        "content": "Array.from('cat')"
      },
      {
        "title": "Result",
        "content": "['c', 'a', 't']"
      },
      {
        "title": "Remember",
        "content": "Can also accept a mapping callback as its second argument."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-includes",
    "title": ".includes()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether an array contains a value. Returns true or false."
      },
      {
        "title": "Example",
        "content": "const pets = ['cat', 'dog'];\npets.includes('dog')"
      },
      {
        "title": "Result",
        "content": "true"
      },
      {
        "title": "Remember",
        "content": "For objects, includes checks object identity, not matching object properties."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-indexof",
    "title": ".indexOf()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the first index of a value, or -1 if the value is not found."
      },
      {
        "title": "Example",
        "content": "['red', 'blue', 'green'].indexOf('blue')"
      },
      {
        "title": "Result",
        "content": "1"
      },
      {
        "title": "Remember",
        "content": "Use includes() if you only need to know whether a value exists."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-array-isarray",
    "title": "Array.isArray()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether a value is an array."
      },
      {
        "title": "Example",
        "content": "Array.isArray([1, 2])\nArray.isArray('hello')"
      },
      {
        "title": "Result",
        "content": "true\nfalse"
      },
      {
        "title": "Remember",
        "content": "More reliable than checking typeof, because typeof [] returns 'object'."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-join",
    "title": ".join()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Combines array elements into one string, using the supplied separator."
      },
      {
        "title": "Example",
        "content": "const words = ['learn', 'JavaScript'];\nwords.join(' ')"
      },
      {
        "title": "Result",
        "content": "'learn JavaScript'"
      },
      {
        "title": "Remember",
        "content": "The original array is not changed. The default separator is a comma."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-lastindexof",
    "title": ".lastIndexOf()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the last index of a value, or -1 if it is not found."
      },
      {
        "title": "Example",
        "content": "[1, 2, 1, 3].lastIndexOf(1)"
      },
      {
        "title": "Result",
        "content": "2"
      },
      {
        "title": "Remember",
        "content": "Searches from right to left."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-length-array",
    "title": ".length (array)",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "A property that gives the number of elements in an array."
      },
      {
        "title": "Example",
        "content": "const numbers = [5, 8, 2];\nnumbers.length"
      },
      {
        "title": "Result",
        "content": "3"
      },
      {
        "title": "Remember",
        "content": "length is a property, so it has no parentheses."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-map",
    "title": ".map()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Runs a callback for every element and returns a new array containing the callback results."
      },
      {
        "title": "Example",
        "content": "const numbers = [2, 4, 6];\nconst doubled = numbers.map(number => number * 2);"
      },
      {
        "title": "Result",
        "content": "[4, 8, 12]"
      },
      {
        "title": "Remember",
        "content": "map transforms every element. The original array is not changed by map itself."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-pop",
    "title": ".pop()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Removes and returns the last element of the original array."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 2, 3];\nconst removed = numbers.pop();"
      },
      {
        "title": "Result",
        "content": "removed is 3; numbers is [1, 2]"
      },
      {
        "title": "Remember",
        "content": "Mutates the original array."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-push",
    "title": ".push()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Adds one or more elements to the end of the original array and returns its new length."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 2];\nconst newLength = numbers.push(3, 4);"
      },
      {
        "title": "Result",
        "content": "numbers is [1, 2, 3, 4]; newLength is 4"
      },
      {
        "title": "Remember",
        "content": "Mutates the original array. It returns the new length, not the array."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-reduce",
    "title": ".reduce()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Combines array elements into one accumulated result, such as a sum or a single object."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 2, 3, 4];\nconst total = numbers.reduce((sum, number) => sum + number, 0);"
      },
      {
        "title": "Result",
        "content": "10"
      },
      {
        "title": "Remember",
        "content": "The first callback argument is the accumulator. The second is the current element. The 0 is the initial accumulator value."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-reduceright",
    "title": ".reduceRight()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Works like reduce(), but processes the array from right to left."
      },
      {
        "title": "Example",
        "content": "['a', 'b', 'c'].reduceRight((result, letter) => result + letter, '')"
      },
      {
        "title": "Result",
        "content": "'cba'"
      },
      {
        "title": "Remember",
        "content": "The direction matters when the operation is not commutative."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-reverse",
    "title": ".reverse()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Reverses the order of elements in the original array."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 2, 3];\nnumbers.reverse();"
      },
      {
        "title": "Result",
        "content": "[3, 2, 1]"
      },
      {
        "title": "Remember",
        "content": "Mutates the original array. Use toReversed() if you need a non-mutating version in modern JavaScript."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-shift",
    "title": ".shift()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Removes and returns the first element of the original array."
      },
      {
        "title": "Example",
        "content": "const numbers = [1, 2, 3];\nconst first = numbers.shift();"
      },
      {
        "title": "Result",
        "content": "first is 1; numbers is [2, 3]"
      },
      {
        "title": "Remember",
        "content": "Mutates the original array."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-slice",
    "title": ".slice()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns a shallow copy of a selected part of an array. The end index is not included."
      },
      {
        "title": "Example",
        "content": "const numbers = [10, 20, 30, 40];\nnumbers.slice(1, 3)"
      },
      {
        "title": "Result",
        "content": "[20, 30]"
      },
      {
        "title": "Remember",
        "content": "Does not change the original array. A negative index counts from the end."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-some",
    "title": ".some()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns true if at least one element passes a condition."
      },
      {
        "title": "Example",
        "content": "[2, 5, 8].some(number => number > 6)"
      },
      {
        "title": "Result",
        "content": "true"
      },
      {
        "title": "Remember",
        "content": "Stops as soon as it finds a match. An empty array returns false."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-sort",
    "title": ".sort()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Sorts the original array. Use a compare function for numeric sorting."
      },
      {
        "title": "Example",
        "content": "const numbers = [10, 2, 5];\nnumbers.sort((a, b) => a - b);"
      },
      {
        "title": "Result",
        "content": "[2, 5, 10]"
      },
      {
        "title": "Remember",
        "content": "Without a compare function, values are sorted as strings. sort() mutates the original array."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-splice",
    "title": ".splice()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Removes, replaces or inserts elements in the original array."
      },
      {
        "title": "Example",
        "content": "const letters = ['a', 'b', 'c'];\nletters.splice(1, 1);"
      },
      {
        "title": "Result",
        "content": "Removes ['b']; letters becomes ['a', 'c']"
      },
      {
        "title": "Remember",
        "content": "Syntax: splice(startIndex, deleteCount, item1, item2, ...). It mutates the original array."
      }
    ]
  },
  {
    "id": "tti-method-array-methods-unshift",
    "title": ".unshift()",
    "category": "Array Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Adds one or more elements to the beginning of the original array and returns its new length."
      },
      {
        "title": "Example",
        "content": "const numbers = [2, 3];\nconst newLength = numbers.unshift(0, 1);"
      },
      {
        "title": "Result",
        "content": "numbers is [0, 1, 2, 3]; newLength is 4"
      },
      {
        "title": "Remember",
        "content": "Mutates the original array."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-charat",
    "title": ".charAt()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the character at a specified index."
      },
      {
        "title": "Example",
        "content": "'hello'.charAt(1)"
      },
      {
        "title": "Result",
        "content": "'e'"
      },
      {
        "title": "Remember",
        "content": "If the index is out of range, it returns an empty string."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-charcodeat",
    "title": ".charCodeAt()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the UTF-16 code unit at a specified index."
      },
      {
        "title": "Example",
        "content": "'A'.charCodeAt(0)"
      },
      {
        "title": "Result",
        "content": "65"
      },
      {
        "title": "Remember",
        "content": "For many common English letters this corresponds to the familiar character code. It is not a full Unicode code-point method."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-endswith",
    "title": ".endsWith()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether a string ends with the supplied text."
      },
      {
        "title": "Example",
        "content": "'picture.jpg'.endsWith('.jpg')"
      },
      {
        "title": "Result",
        "content": "true"
      },
      {
        "title": "Remember",
        "content": "Returns a boolean. Matching is case-sensitive."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-includes",
    "title": ".includes()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether a string contains the supplied text. Returns true or false."
      },
      {
        "title": "Example",
        "content": "'hello world'.includes('world')"
      },
      {
        "title": "Result",
        "content": "true"
      },
      {
        "title": "Remember",
        "content": "Matching is case-sensitive."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-length-string",
    "title": ".length (string)",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "A property that gives the number of UTF-16 code units in a string. Spaces count."
      },
      {
        "title": "Example",
        "content": "'hello there'.length"
      },
      {
        "title": "Result",
        "content": "11"
      },
      {
        "title": "Remember",
        "content": "length is a property, not a method. Some emoji count as two code units."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-repeat",
    "title": ".repeat()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns a new string containing the original string repeated a chosen number of times."
      },
      {
        "title": "Example",
        "content": "'ha'.repeat(3)"
      },
      {
        "title": "Result",
        "content": "'hahaha'"
      },
      {
        "title": "Remember",
        "content": "The repeat count must be non-negative."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-replace",
    "title": ".replace()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns a new string with the first matching substring or pattern replaced."
      },
      {
        "title": "Example",
        "content": "'cat cat'.replace('cat', 'dog')"
      },
      {
        "title": "Result",
        "content": "'dog cat'"
      },
      {
        "title": "Remember",
        "content": "A string search value replaces only the first match. Use a global regular expression or replaceAll() for all matches."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-replaceall",
    "title": ".replaceAll()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns a new string with all matching substrings or pattern matches replaced."
      },
      {
        "title": "Example",
        "content": "'a-a-a'.replaceAll('-', '/')"
      },
      {
        "title": "Result",
        "content": "'a/a/a'"
      },
      {
        "title": "Remember",
        "content": "Does not mutate the original string."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-slice",
    "title": ".slice()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Extracts part of a string and returns it as a new string. The end index is not included."
      },
      {
        "title": "Example",
        "content": "'javascript'.slice(0, 4)"
      },
      {
        "title": "Result",
        "content": "'java'"
      },
      {
        "title": "Remember",
        "content": "Negative indexes count from the end."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-split",
    "title": ".split()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Splits a string into an array using a separator."
      },
      {
        "title": "Example",
        "content": "'red blue green'.split(' ')"
      },
      {
        "title": "Result",
        "content": "['red', 'blue', 'green']"
      },
      {
        "title": "Remember",
        "content": "split(' ') splits on spaces. split('') splits into UTF-16 code units. The separator you choose matters."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-startswith",
    "title": ".startsWith()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether a string begins with the supplied text."
      },
      {
        "title": "Example",
        "content": "'javascript'.startsWith('java')"
      },
      {
        "title": "Result",
        "content": "true"
      },
      {
        "title": "Remember",
        "content": "Returns a boolean. Matching is case-sensitive."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-substring",
    "title": ".substring()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the characters between two indexes. The end index is not included."
      },
      {
        "title": "Example",
        "content": "'javascript'.substring(0, 4)"
      },
      {
        "title": "Result",
        "content": "'java'"
      },
      {
        "title": "Remember",
        "content": "Unlike slice(), negative values are treated as 0 and reversed arguments are swapped."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-tolowercase",
    "title": ".toLowerCase()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns a lowercase version of the string."
      },
      {
        "title": "Example",
        "content": "'HELLO'.toLowerCase()"
      },
      {
        "title": "Result",
        "content": "'hello'"
      },
      {
        "title": "Remember",
        "content": "Strings are immutable, so the original string is unchanged."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-touppercase",
    "title": ".toUpperCase()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns an uppercase version of the string."
      },
      {
        "title": "Example",
        "content": "'hello'.toUpperCase()"
      },
      {
        "title": "Result",
        "content": "'HELLO'"
      },
      {
        "title": "Remember",
        "content": "Strings are immutable, so the original string is unchanged."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-trim",
    "title": ".trim()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Removes whitespace from both the beginning and the end of a string."
      },
      {
        "title": "Example",
        "content": "'  hello  '.trim()"
      },
      {
        "title": "Result",
        "content": "'hello'"
      },
      {
        "title": "Remember",
        "content": "Whitespace inside the string remains untouched."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-trimend",
    "title": ".trimEnd()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Removes whitespace from the end of a string."
      },
      {
        "title": "Example",
        "content": "'hello  '.trimEnd()"
      },
      {
        "title": "Result",
        "content": "'hello'"
      },
      {
        "title": "Remember",
        "content": "Also known as trimRight()."
      }
    ]
  },
  {
    "id": "tti-method-string-methods-trimstart",
    "title": ".trimStart()",
    "category": "String Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Removes whitespace from the beginning of a string."
      },
      {
        "title": "Example",
        "content": "'  hello'.trimStart()"
      },
      {
        "title": "Result",
        "content": "'hello'"
      },
      {
        "title": "Remember",
        "content": "Also known as trimLeft()."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-abs",
    "title": "Math.abs()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the absolute value: the distance from zero."
      },
      {
        "title": "Example",
        "content": "Math.abs(-7)"
      },
      {
        "title": "Result",
        "content": "7"
      },
      {
        "title": "Remember",
        "content": "The result is never negative."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-ceil",
    "title": "Math.ceil()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Rounds a number up to the next integer."
      },
      {
        "title": "Example",
        "content": "Math.ceil(4.2)"
      },
      {
        "title": "Result",
        "content": "5"
      },
      {
        "title": "Remember",
        "content": "Rounds toward positive infinity."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-floor",
    "title": "Math.floor()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Rounds a number down to the next integer."
      },
      {
        "title": "Example",
        "content": "Math.floor(4.9)"
      },
      {
        "title": "Result",
        "content": "4"
      },
      {
        "title": "Remember",
        "content": "Rounds toward negative infinity."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-trunc",
    "title": "Math.trunc()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Removes the decimal part of a number, keeping only the integer part."
      },
      {
        "title": "Example",
        "content": "Math.trunc(4.9)\nMath.trunc(-4.9)"
      },
      {
        "title": "Result",
        "content": "4\n-4"
      },
      {
        "title": "Remember",
        "content": "Truncates toward zero. Unlike Math.floor(), it does not always round down."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-max",
    "title": "Math.max()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the largest of the supplied numbers."
      },
      {
        "title": "Example",
        "content": "Math.max(3, 9, 4)"
      },
      {
        "title": "Result",
        "content": "9"
      },
      {
        "title": "Remember",
        "content": "Use Math.max(...numbers) when the values are stored in an array."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-min",
    "title": "Math.min()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the smallest of the supplied numbers."
      },
      {
        "title": "Example",
        "content": "Math.min(3, 9, 4)"
      },
      {
        "title": "Result",
        "content": "3"
      },
      {
        "title": "Remember",
        "content": "Use Math.min(...numbers) when the values are stored in an array."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-pow",
    "title": "Math.pow()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Raises a base number to an exponent."
      },
      {
        "title": "Example",
        "content": "Math.pow(3, 2)"
      },
      {
        "title": "Result",
        "content": "9"
      },
      {
        "title": "Remember",
        "content": "The exponent operator is a shorter alternative: 3 ** 2."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-round",
    "title": "Math.round()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Rounds a number to the nearest integer."
      },
      {
        "title": "Example",
        "content": "Math.round(4.6)"
      },
      {
        "title": "Result",
        "content": "5"
      },
      {
        "title": "Remember",
        "content": "Half values round toward positive infinity, so Math.round(-1.5) is -1."
      }
    ]
  },
  {
    "id": "tti-method-math-number-math-sqrt",
    "title": "Math.sqrt()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Calculates the square root of a number."
      },
      {
        "title": "Example",
        "content": "Math.sqrt(81)"
      },
      {
        "title": "Result",
        "content": "9"
      },
      {
        "title": "Remember",
        "content": "A negative input returns NaN."
      }
    ]
  },
  {
    "id": "tti-method-math-number-number-isfinite",
    "title": "Number.isFinite()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether a value is a finite number. It does not convert strings to numbers."
      },
      {
        "title": "Example",
        "content": "Number.isFinite(12)\nNumber.isFinite('12')\nNumber.isFinite(Infinity)"
      },
      {
        "title": "Result",
        "content": "true\nfalse\nfalse"
      },
      {
        "title": "Remember",
        "content": "Unlike the global isFinite(), Number.isFinite() does not coerce its argument."
      }
    ]
  },
  {
    "id": "tti-method-math-number-number-isinteger",
    "title": "Number.isInteger()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether a value is a number with no fractional part."
      },
      {
        "title": "Example",
        "content": "Number.isInteger(8)\nNumber.isInteger(8.5)\nNumber.isInteger('8')"
      },
      {
        "title": "Result",
        "content": "true\nfalse\nfalse"
      },
      {
        "title": "Remember",
        "content": "Useful for checking whether Math.sqrt(value) is a whole number."
      }
    ]
  },
  {
    "id": "tti-method-math-number-number-isnan",
    "title": "Number.isNaN()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Checks whether a value is exactly the special NaN value."
      },
      {
        "title": "Example",
        "content": "Number.isNaN(NaN)\nNumber.isNaN('hello')"
      },
      {
        "title": "Result",
        "content": "true\nfalse"
      },
      {
        "title": "Remember",
        "content": "Unlike the global isNaN(), it does not convert the value before checking."
      }
    ]
  },
  {
    "id": "tti-method-math-number-tofixed",
    "title": ".toFixed()",
    "category": "Math & Number",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Formats a number with a fixed number of digits after the decimal point. Returns a string."
      },
      {
        "title": "Example",
        "content": "(3.14159).toFixed(2)"
      },
      {
        "title": "Result",
        "content": "'3.14'"
      },
      {
        "title": "Remember",
        "content": "Useful for display. The returned value is a string, not a number."
      }
    ]
  },
  {
    "id": "tti-method-objects-json-object-keys",
    "title": "Object.keys()",
    "category": "Objects & JSON",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns an array of an object's own enumerable property names."
      },
      {
        "title": "Example",
        "content": "const person = { name: 'Sam', age: 20 };\nObject.keys(person)"
      },
      {
        "title": "Result",
        "content": "['name', 'age']"
      },
      {
        "title": "Remember",
        "content": "Useful for looping through property names."
      }
    ]
  },
  {
    "id": "tti-method-objects-json-object-values",
    "title": "Object.values()",
    "category": "Objects & JSON",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns an array of an object's own enumerable property values."
      },
      {
        "title": "Example",
        "content": "const person = { name: 'Sam', age: 20 };\nObject.values(person)"
      },
      {
        "title": "Result",
        "content": "['Sam', 20]"
      },
      {
        "title": "Remember",
        "content": "The values are returned in the same order as the corresponding keys."
      }
    ]
  },
  {
    "id": "tti-method-objects-json-object-is",
    "title": "Object.is()",
    "category": "Objects & JSON",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Compares two values using SameValue semantics."
      },
      {
        "title": "Example",
        "content": "Object.is(NaN, NaN)\nObject.is(0, -0)"
      },
      {
        "title": "Result",
        "content": "true\nfalse"
      },
      {
        "title": "Remember",
        "content": "Similar to ===, but it treats NaN as equal to itself and distinguishes +0 from -0."
      }
    ]
  },
  {
    "id": "tti-method-objects-json-json-parse",
    "title": "JSON.parse()",
    "category": "Objects & JSON",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Converts a valid JSON string into a JavaScript value."
      },
      {
        "title": "Example",
        "content": "const text = '{\"age\": 20}';\nconst person = JSON.parse(text);"
      },
      {
        "title": "Result",
        "content": "{ age: 20 }"
      },
      {
        "title": "Remember",
        "content": "Invalid JSON causes a SyntaxError. JSON text uses double quotes around property names and strings."
      }
    ]
  },
  {
    "id": "tti-method-objects-json-json-stringify",
    "title": "JSON.stringify()",
    "category": "Objects & JSON",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Converts a JavaScript value into a JSON string."
      },
      {
        "title": "Example",
        "content": "JSON.stringify({ name: 'Sam', age: 20 })"
      },
      {
        "title": "Result",
        "content": "'{\"name\":\"Sam\",\"age\":20}'"
      },
      {
        "title": "Remember",
        "content": "Useful for sending or storing data. Functions and undefined object properties are omitted."
      }
    ]
  },
  {
    "id": "tti-method-other-methods-tostring",
    "title": ".toString()",
    "category": "Other Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns a string representation of a value."
      },
      {
        "title": "Example",
        "content": "(123).toString()"
      },
      {
        "title": "Result",
        "content": "'123'"
      },
      {
        "title": "Remember",
        "content": "Many values have their own toString() implementation."
      }
    ]
  },
  {
    "id": "tti-method-other-methods-valueof",
    "title": ".valueOf()",
    "category": "Other Methods",
    "difficulty": "Reference",
    "sections": [
      {
        "title": "What it does",
        "content": "Returns the primitive value of an object wrapper. It is rarely needed directly in everyday code."
      },
      {
        "title": "Example",
        "content": "new Number(7).valueOf()"
      },
      {
        "title": "Result",
        "content": "7"
      },
      {
        "title": "Remember",
        "content": "Avoid creating Number, String or Boolean wrapper objects with new."
      }
    ]
  }
];
