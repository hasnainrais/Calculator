let display = document.getElementById("display");

let operator = ['+','-','*','/'];

function appendToDisplay(input){


    display.value += input

  

}


function clearDisplay(){

    display.value = "";

}



function calculate(){

    display.value = eval(display.value)

}

function del(){
    let lastCharc = display.value[display.value.length -1];
    
    display.value = display.value.slice(0,-1)
}