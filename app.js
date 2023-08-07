let pics = [
    'https://images.unsplash.com/photo-1506792006437-256b665541e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1601280929102-6935eec5e05a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpeGVsJTIwYXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBpeGVsJTIwYXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
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