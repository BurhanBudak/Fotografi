let burger = document.querySelector('.toggle');
let flexs = document.querySelectorAll('.flex-item-inner');
let preview = document.querySelector('.preview');
let previewImage = preview.querySelector('img');
let previewClose= preview.querySelector('.close');
let prev = preview.querySelector('.prev');
let next = preview.querySelector('.next');

burger.addEventListener('click', function(){
        burger.classList.toggle('change');
        document.querySelector('.sidenav').classList.toggle('active');
});

// console.log(flexs);
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
                previewImage.src = src;
                preview.classList.add('open');
}
previewClose.addEventListener('click', close);
function close() {
        preview.classList.remove('open');
}



        