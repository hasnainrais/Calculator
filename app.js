let display = document.getElementById("display");

function appendToDisplay(input){


    display.value += input

  

}


function clearDisplay(){

    display.value = "";

}

function splitInput(){

    display.value += input.split("");
 
    
    
}


function calculate(){

    display.value = eval(display.value)


    // if (display.value == '+'){
        
    //    let add =  display.value + display.value;

    //     console.log(add);
        
    // }
    
}