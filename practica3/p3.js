
var IsNotCal = false;

$(document).ready(function () {



    $(".op").click(function () {

        let num = $(this).attr("id");

       // console.log(num)
 
        clicKey(num);
        
    });


    $("#result").click(function () {

        getResult();
        

    });

    $("#clear").click(function () {
        
        clearOutput();

    });


    $("#del").click(function () {
        
        deleteKey();


    })

    $(document).keydown(function (e) {


        switch (e.key) {
            case '1':
                clicKey('1');
                break;
            case '2':
                clicKey('2');
                break;
            case '3':
                clicKey('3');
                break;
            case '4':
                clicKey('4');
                break;
            case '5':
                clicKey('5');
                break;
            case '6':
                clicKey('6');
                break;
            case '7':
                clicKey('7');
                break;
            case '8':
                clicKey('8');
                break;
            case '9':
                clicKey('9');
                break;
            case '.':
                clicKey('.');
                break;
            case '+':
                clicKey('+');
                break;
            case '-':
                clicKey('-');
                break;
            case '*':
                clicKey('*');
                break;
            case '/':
                clicKey('/');
                break;
            case 'Backspace':
                e.preventDefault();
                deleteKey();
                break;
            case 'Enter':
                e.preventDefault();
                getResult();
                break;
            default:
                break;


        }






    })
    


});


function clicKey(num) {

    if (IsNotCal == true) {

        $("#output").text("");
        
    }

    let str = $("#output").text();
    $("#output").text(str + num);
    IsNotCal = false;
    


}

function getResult() {

    IsNotCal = true;
    let numresult = eval($("#output").text());
    $("#output").text(numresult)
    


}

function clearOutput() {

    $("#output").text("");
    

}


function deleteKey() {

     if (IsNotCal == true) {

        $("#output").text("");
        
     } else {
         
         let str = $("#output").text();
         str = str.substr(0, str.length - 1);
         $("#output").text(str);
         
         
         
    }
    


}