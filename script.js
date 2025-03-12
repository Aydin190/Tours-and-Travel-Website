var hte = new Typed('.home-typed-effect', {
    strings:['A Truly Deluxe Experience','Top Quality Travels','Enhanced Experiences','Something Magical'],
    typeSpeed:60,
    loop:true,
    backSpeed:60,
    backDelay:1000,
})



var ate = new Typed('.about-typed-effect', {
    strings:['A Truly Deluxe Experience','Top Quality Travels','Enhanced Experiences','Something Magical'],
    typeSpeed:60,
    loop:true,
    backSpeed:60,
    backDelay:1000,
})



const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;
const itemWidth = 320;
// This is the function for the next button
nextBtn.addEventListener("click", () => {
    const maxIndex = carousel.children.length -1;
    if(currentIndex < maxIndex) {
        currentIndex++;
        carousel.style.transform = `translateX(-${
            currentIndex * itemWidth
        }px) `;
    }
})

// This is the function for the previous button
prevBtn.addEventListener("click", () => {
    if(currentIndex > 0){
        currentIndex--;
        carousel.style.transform = `translateX(-${
            currentIndex * itemWidth
        }px)`;
    }
})












// This is for the contact us page
document.querySelector("form").addEventListener("submit",function(event) {
document.body.classList.add("sent");
})