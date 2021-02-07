let slideIndex = 1;
ShowSlides (slideIndex);

function currentSlide (n){
    ShowSlides(slideIndex = n);
}

function ShowSlides (n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length)
    {
        slideIndex = 1;
    }

    if (n < 1)
    {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
        dots[i].addEventListener('click', _ => dots[i].classList.toggle('is-active'));
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}