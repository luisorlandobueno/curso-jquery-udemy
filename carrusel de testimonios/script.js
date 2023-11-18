$(document).ready(function () { 


    var currentIndex = 0;
    var testimonial = $(".testimonial");
    var totalTestimonials = testimonial.length;

    showTestimonial(currentIndex);
    
    $("#prevBtn").on("click", function () {

        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentIndex);
        
    })

    $("#nextBtn").on("click", function () {

        currentIndex = (currentIndex + 1 ) % totalTestimonials;
        showTestimonial(currentIndex);
        
    })



    function showTestimonial(index) {

        testimonial.hide();
        testimonial.eq(index).fadeIn();
        
    }




})