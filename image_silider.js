const img_silider = document.querySelector('.img-silider');
const images = document.querySelectorAll('.img-silider img');
//  select button
const Nbtn = document.querySelector('#nextbtn');
const Pbtn = document.querySelector('#prevbtn');

// count 

let count = 1;
const size = images[0].clientWidth;
img_silider.style.transform = 'translateX(' + (-size * count) + 'px)';


Nbtn.addEventListener('click', () => {
    if (count >= images.length -1 ) return;
    img_silider.style.transition = "transform 0.4s ease-in-out";
    count++
    img_silider.style.transform = 'translateX(' + (-size * count) + 'px)';
    
});


Pbtn.addEventListener('click', () => {
    if (count <= 0) return;
    img_silider.style.transition = "transform 0.4s ease-in-out";
    count--
    img_silider.style.transform = 'translateX(' + (-size * count) + 'px)';
    console.log("my name is alam")
});

img_silider.addEventListener('transitionend', () => {
    if (images[count].id === 'last-clone') {
        img_silider.style.transition = 'none';
        count = images.length - 2;
        img_silider.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
    if (images[count].id === 'frist-clone') {
        img_silider.style.transition = 'none';
        count = images.length - count;
        img_silider.style.transform = 'translateX(' + (-size * count) + 'px)';
    }

})

