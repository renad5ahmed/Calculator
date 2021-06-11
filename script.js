//This is the JavaScript file

function display(input){//function to display values

document.getElementById("data").value+=input;
}
 
function getResult(){//function to get the results

let x = document.getElementById("data").value;
let y = eval(x);//calling global function
document.getElementById("data").value = y;
}

function clearAll(){//function to clear data displayed

document.getElementById("data").value = "";
}