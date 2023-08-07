let images = [
    'paint-brushes.jpg'
];
let imageTag = document.querySelector('.imageTag');
let i = 0;

function next() {
    if (i >= images.length - 1) {
        return false;
    }
    i++;
    imageTag.setAttribute('src', images[i]);
}
function previous() {
    if (i <= 0) {
        return false;
    }
    i--;
    imageTag.setAttribute('src', images[i]);
}