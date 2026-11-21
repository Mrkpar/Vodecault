export const ttiTopics = [
  {
    "id": "tti-find-filter-map-some",
    "title": "Choosing Between find, filter, map and some",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "The difference",
        "content": "find() returns the first matching element. filter() returns every matching element in a new array. map() transforms every element into a new array. some() checks whether at least one element passes a condition and returns true or false."
      },
      {
        "title": "Complete example",
        "content": "const numbers = [2, 5, 8, 11];\n\nconst firstOverFive = numbers.find(number => number > 5);\nconst allOverFive = numbers.filter(number => number > 5);\nconst doubled = numbers.map(number => number * 2);\nconst hasOverTen = numbers.some(number => number > 10);\n\nconsole.log(firstOverFive); // 8\nconsole.log(allOverFive);   // [8, 11]\nconsole.log(doubled);        // [4, 10, 16, 22]\nconsole.log(hasOverTen);     // true"
      },
      {
        "title": "Remember",
        "content": "find = one value. filter = an array of matches. map = an array of transformed values. some = a boolean."
      }
    ]
  },
  {
    "id": "tti-array-callbacks",
    "title": "Understanding Array Callbacks",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Description",
        "content": "Methods such as map(), filter(), find() and some() receive a callback function. JavaScript calls that function for array elements while the method is working."
      },
      {
        "title": "Complete example",
        "content": "const numbers = [3, 6, 9];\n\nconst doubled = numbers.map(number => {\n    return number * 2;\n});\n\nconsole.log(doubled); // [6, 12, 18]"
      },
      {
        "title": "Short arrow function",
        "content": "When the callback contains one expression, you can omit the braces and return keyword:\n\nconst doubled = numbers.map(number => number * 2);\n\nThis is equivalent to the longer callback above."
      }
    ]
  },
  {
    "id": "tti-push",
    "title": "Adding Items with push",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Description",
        "content": "push() adds one or more elements to the end of an existing array. It changes the original array and returns the new array length."
      },
      {
        "title": "Complete example",
        "content": "const fruits = ['apple', 'banana'];\n\nconst newLength = fruits.push('orange');\n\nconsole.log(fruits);    // ['apple', 'banana', 'orange']\nconsole.log(newLength);  // 3"
      },
      {
        "title": "Remember",
        "content": "push() returns a number (the new length), not the updated array."
      }
    ]
  },
  {
    "id": "tti-split-and-length",
    "title": "Splitting a Sentence and Counting Words",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Description",
        "content": "split(' ') turns a sentence into an array of words. The array's length property tells you how many elements it contains."
      },
      {
        "title": "Complete example",
        "content": "const sentence = 'I love learning JavaScript';\n\nconst words = sentence.split(' ');\nconst wordCount = words.length;\n\nconsole.log(words);     // ['I', 'love', 'learning', 'JavaScript']\nconsole.log(wordCount); // 4"
      },
      {
        "title": "Important distinction",
        "content": "split(' ') separates at spaces. split('') separates a string into individual UTF-16 code units. Also, length is a property, so write words.length, not words.length()."
      },
      {
        "title": "Counting non-whitespace characters",
        "content": "const sentence = 'hello world';\nconst letterCount = sentence.replace(/\\s/g, '').length;\n\nconsole.log(letterCount); // 10"
      }
    ]
  },
  {
    "id": "tti-string-length",
    "title": "Counting Characters in a String",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Description",
        "content": "A string already has a length property. You do not need join() unless you are working with an array."
      },
      {
        "title": "Complete example",
        "content": "const word = 'JavaScript';\nconst letterCount = word.length;\n\nconsole.log(letterCount); // 10"
      },
      {
        "title": "String versus array",
        "content": "const words = ['I', 'love', 'JavaScript'];\nconst sentence = words.join(' ');\n\nconsole.log(sentence); // 'I love JavaScript'\nconsole.log(sentence.length); // 20\n\njoin() belongs to arrays. length is available on both strings and arrays."
      }
    ]
  },
  {
    "id": "tti-perfect-squares",
    "title": "Checking and Finding Perfect Squares",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Description",
        "content": "Math.sqrt() calculates a square root. Number.isInteger() checks whether the result is a whole number. If the square root is an integer, the original number is a perfect square."
      },
      {
        "title": "Complete example",
        "content": "const root = Math.sqrt(121);\n\nconsole.log(root);                       // 11\nconsole.log(Number.isInteger(root));     // true\nconsole.log(Number.isInteger(Math.sqrt(114))); // false"
      },
      {
        "title": "Codewars example: next perfect square",
        "content": "function findNextSquare(number) {\n    const root = Math.sqrt(number);\n\n    if (Number.isInteger(root)) {\n        return (root + 1) * (root + 1);\n    }\n\n    return -1;\n}\n\nconsole.log(findNextSquare(121)); // 144\nconsole.log(findNextSquare(114)); // -1"
      },
      {
        "title": "Remember",
        "content": "Add 1 to the square root, then square that new root. Do not add 1 to the original number."
      }
    ]
  },
  {
    "id": "tti-kiss",
    "title": "Codewars Pattern: Keep It Simple Stupid",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Task",
        "content": "Given a sentence, return 'Keep It Simple Stupid' if any word is longer than the total number of words. Otherwise return 'Good work Joe!'."
      },
      {
        "title": "Complete example",
        "content": "function isKiss(words) {\n    const allWords = words.split(' ');\n    const wordCount = allWords.length;\n    const hasLongWord = allWords.some(word => word.length > wordCount);\n\n    if (hasLongWord) {\n        return 'Keep It Simple Stupid';\n    } else {\n        return 'Good work Joe!';\n    }\n}\n\nconsole.log(isKiss('I love JS')); // 'Good work Joe!'\nconsole.log(isKiss('This is complicated')); // 'Keep It Simple Stupid'"
      },
      {
        "title": "How it works",
        "content": "split(' ') creates an array of words. length counts the words. some() checks whether at least one word is longer than the word count. The if statement chooses the correct message."
      },
      {
        "title": "Common mistakes",
        "content": "Use split(' '), not split(''), when you want words. some() returns true or false; it does not return a count. An else branch does not take a condition."
      }
    ]
  },
  {
    "id": "tti-find-vs-findindex",
    "title": "find vs findIndex",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Description",
        "content": "Both methods search using a condition. find() returns the matching element. findIndex() returns the position of the first matching element."
      },
      {
        "title": "Complete example",
        "content": "const numbers = [4, 7, 12, 19];\n\nconst value = numbers.find(number => number > 10);\nconst position = numbers.findIndex(number => number > 10);\n\nconsole.log(value);    // 12\nconsole.log(position); // 2"
      },
      {
        "title": "When nothing matches",
        "content": "find() returns undefined. findIndex() returns -1."
      }
    ]
  },
  {
    "id": "tti-string-endswith",
    "title": "Checking a String with endsWith",
    "category": "TTI Practice",
    "difficulty": "Beginner",
    "sections": [
      {
        "title": "Description",
        "content": "endsWith() checks whether a string finishes with the characters you provide. It returns true or false."
      },
      {
        "title": "Complete example",
        "content": "const filename = 'photo.jpg';\n\nconsole.log(filename.endsWith('.jpg')); // true\nconsole.log(filename.endsWith('.png')); // false"
      },
      {
        "title": "Remember",
        "content": "String comparisons are case-sensitive: 'photo.JPG'.endsWith('.jpg') returns false."
      }
    ]
  }
];
