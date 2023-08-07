const slider_img = document.querySelector('.slider-image');
const images = ['garden.jpg', 'strawberry.jpg', 'kitties.jpg'];

const i = 0;

function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){

}