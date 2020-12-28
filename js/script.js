$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.navbar').addClass("bg-dark");
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar').removeClass("bg-dark");
        }
    });
});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Student", "Photographer", "Videographer", "Web Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});