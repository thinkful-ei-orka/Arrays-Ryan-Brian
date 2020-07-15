const Array = require('./array');
const { get } = require('./memory');

function main(){

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
  }
  
  //main();

  function firstItem(){
    
   return Array.get(0)
  
  }

  firstItem();