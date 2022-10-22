//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

//For example, when the input is green, output should be yellow.

//solution
function updateLight(current) {
    if(current === 'green'){return 'yellow'}
    else if (current === 'yellow'){return 'red'}
    else if (current === 'red'){return 'green'}
    //your code here!
  
  }