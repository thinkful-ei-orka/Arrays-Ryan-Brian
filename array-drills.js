/* eslint-disable quotes */
// eslint-disable-next-line quotes
"use strict";

const Array = require("./array");
const { get } = require("./memory");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  for (let i = 0; i < arr.length; i) {
    arr.remove(0);
  }
  console.log(arr);
  arr.push("tauhida");
  console.log(arr.get(0));
}

//main();

function firstItem() {
  return Array.get(0);
}

//firstItem();

function URLify(url) {
  let newURL = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] !== " ") {
      newURL = newURL + url[i];
    } else {
      newURL = newURL + "%20";
    }
  }
  console.log(newURL);
}

// URLify('tauhida parveen')
// URLify('www.thinkful.com /tauh ida parv een')

function filterArray(Array) {
  let newArray = [];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] > 4) {
      newArray.push(Array[i]);
    }
  }
  console.log(newArray);
}

//filterArray([1,8,4,5,-18,18,20,3,2])

function maxSum(Array) {
  let sum = 0;
  for (let i = 0; i < Array.length; i++) {
    sum = sum + Array[i];
  }
  console.log(sum);
}

//maxSum([4, 6, -8, 13, -12, 2])

function mergeArrays(array1, array2) {
  let solutionArray = array1.concat(array2);
  let sortedArray = solutionArray.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray);
}

// mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

function filterCharacters(string) {
  let filteredString = "";
  for (let i = 0; i < string.length; i++)
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      continue;
    } else filteredString += string[i];
  console.log(filteredString);
}

// filterCharacters("Battle of the Vowels: Hawaii vs. Grozny");

function productsExceptSelf(array) {
  let resultArray = [],
    product;
  for (let i = 0; i < array.length; i++) {
    product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) product *= array[j];
    }
    resultArray.push(product);
  }
  console.log(resultArray);
}

// productsExceptSelf([1, 3, 9, 4]);

function mutateLines(array) {
  let result = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result[i][j] =
        [...array[i], ...array.map((row) => row[j])].reduce((a, b) => a + b) <
        array.length + array[i].length
          ? 0
          : 1;
    }
  }
  return result;
}

console.log(
  mutateLines([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);

function checkRotation(string, rotatedString) {
  console.log(
    string.length === rotatedString.length &&
      rotatedString.repeat(2).includes(string)
  );
}

// checkRotation("amazon", "azonma");
// checkRotation("amazon", "azonam");
