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
    let newURL = ''
    for (let i = 0; i < url.length; i++) {
        if (url[i] !== ' ') {
            newURL = newURL + url[i];
        } else {
            newURL = newURL + '%20'
        }
    }
    console.log(newURL)
}

// URLify('tauhida parveen')
// URLify('www.thinkful.com /tauh ida parv een')

function filterArray(Array){
    let newArray = []
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] > 4) {
            newArray.push(Array[i]);
        }
    }
    console.log(newArray)
}

//filterArray([1,8,4,5,-18,18,20,3,2])

function maxSum (Array){
    let sum = 0
    for (let i=0;i<Array.length;i++){
        sum = sum + Array[i]
    }
    console.log(sum)
}

//maxSum([4, 6, -8, 13, -12, 2])