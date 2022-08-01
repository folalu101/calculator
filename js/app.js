$(document).ready(function(){

    // mathimatical Functions
   
    
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
       
    
    function modulus(num1, num2){
        return num1 % num2;
    }

    $("#form-holder").submit(function(event){
        const num1 = $("#num-1").val();
        const num2 = $("#num-2").val();
        // const result = add(num1, num2);
        
        $("#num-1").text(num1);
        $("#num-2").text(num2);
        
       

        

        $("#answer").show();


        event.preventDefault();
    });

    $("#addition").click(function(event){
        const num1 = $("#num-1").val();
        const num2 = $("#num-2").val();
        const result = add(num1, num2);

        $("#num-1").text(num1);
        $("#num-2").text(num2);
        $("#answer").text(result);
       


        $("#aswer").show();


        event.preventDefault();
    });

    
        



});