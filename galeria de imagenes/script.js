


$(document).ready(function () {

    $(".filters button").on("click", function () {

        var filtrovalor = $(this).attr('data-filter');

        if (filtrovalor === 'all') {

            $(".image").show();
            
        } else {

            $(".image").hide();
            $('.image[data-category="' + filtrovalor + '"]').show();
            


        }
        



    });
    


});
