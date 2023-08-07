 let images = [
    'https://images.unsplash.com/photo-1506792006437-256b665541e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
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