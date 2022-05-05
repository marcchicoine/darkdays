const headerTag = document.querySelector(".title")
const tunnelTag = document.querySelector(".tunnel")
const alltag = document.querySelector(".totality")
const lightTag = document.querySelector('.light')
const descTag = document.querySelector('h2.titledescriptions')

//when we scroll the page at a certain point (80px) 
//toggle a class to the header
document.addEventListener("scroll", function (){
const pixels = window.pageYOffset

if (pixels > 200) {
    headerTag.classList.add("scrolled");
    tunnelTag.classList.add("grow");
    alltag.classList.add("textstuff");
    lightTag.classList.add("lighton");
    descTag.classList.add("faderrr");


    } else {
       headerTag.classList.remove("scrolled")
       tunnelTag.classList.remove("grow");
       alltag.classList.remove("textstuff");
       lightTag.classList.remove("textstuff");
       descTag.classList.remove("faderrr");

    }
}) 