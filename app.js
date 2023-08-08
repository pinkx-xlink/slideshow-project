const sliderImg = document.querySelector('.slider-img');
const images = ['garden.jpg', 'strawberry.jpg', 'kitties.jpg'];

const i = 0;

function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){
    if( i >= images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return sliderImg.setAttribute('src', "images/"+images[i]);
}