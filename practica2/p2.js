$(document).ready(function () {


    $("#centigrados").change(function () {

        let cent = $("#centigrados").val();
        let cent_number = parseInt(cent);
        let farenh = (cent_number * 9 / 5) + 32;
        $("#farenheit").val(farenh.toFixed(2));
        

    });

    $("#farenheit").change(function () {
        let farenh = $("#farenheit").val();
        let farenh_number = parseInt(farenh);
        let cent = (farenh_number - 32) * 5 / 9;
        $("#centigrados").val(cent.toFixed(2));


    });




    
});