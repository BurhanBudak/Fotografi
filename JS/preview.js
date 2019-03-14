let flexs = document.querySelectorAll('.flex-item-inner');
let images = document.querySelectorAll('.i');
console.log(images);
let preview = document.querySelector('.preview');
let previewImage = preview.querySelector('img');
let previewClose= preview.querySelector('.close');

flexs.forEach(flexItemInner => flexItemInner.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width:720px)').matches){
            flexItemInner.firstElementChild.classList.toggle('front-blur');
            flexItemInner.lastElementChild.classList.toggle('back-flip');
    }
    else{
            change(e);
    };
    })
);
function change(e) {
    let src = e.currentTarget.querySelector('img').src;
    console.log(e)
            previewImage.src = src;
            preview.classList.add('open');
}
previewClose.addEventListener('click', close);
function close() {
    preview.classList.remove('open');
}