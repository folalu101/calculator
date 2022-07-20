$(document).ready(function(){
    $("#form-holder").submit(function(event){


        event.preventDefault();
    });

    // mathimatical Functions

    // Addition
    function add(num1, num2){
        return num1 + num2;
    }

    function divide(num1, num2){
        return num1 / num2;
    }

    function subtract(num1, num2){
        return num1 - num2;
    }

    function multiply(num1, num2){
        return num1 * num2;
    }



});