let pics = [
    
];
let myPics = document.querySelector('.myPics');
let i = 0;

function next() {
    if (i >= pics.length - 1) {
        return false;
    }
    i++;
    myPics.setAttribute('src', pics[i]);
}
function previous() {
    if (i <= 0) {
        return false;
    }
    i--;
    myPics.setAttribute('src', pics[i]);
}