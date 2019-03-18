let flexs = document.querySelectorAll('.flex-item-inner');
let box = document.querySelector('.carouselbox');
let preview = document.querySelector('.preview');
let previewClose= preview.querySelector('.close');

flexs.forEach(flexItemInner => flexItemInner.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width:720px)').matches){
            flexItemInner.firstElementChild.classList.toggle('front-blur');
            flexItemInner.lastElementChild.classList.toggle('back-flip');
    }
    else{
        preview.classList.add('open');
        carousel(e);
    }

    })//event
);//forEach
// previewClose.addEventListener('click', close);
// function close() {
//     current.classList.remove('current');
//     preview.classList.remove('open');
// }

// let carousel = (
  function carousel(e){ //IFFI
    let box = document.querySelector('.carouselbox');
    let next = box.querySelector('.next');
    let prev = box.querySelector('.prev');
    let items = box.querySelectorAll('.content li');
    let i = Number(e.currentTarget.querySelector('.card-front img').id);
    console.log(i);
    let counter = i; 
    let amount = items.length;
    console.log(items.length);
    let current = items[i];
    console.log(current);
    box.classList.add('active');
    function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      if (direction === -1 && counter < 0) { 
        counter = amount - 1; 
      }
      if (direction === 1 &&  !items[counter]) { 
        counter = 0;
      }
      current = items[counter];
      console.log(current);
      current.classList.add('current');
    }//Navigator
    previewClose.addEventListener('click', close);
    function close() {
    current.classList.remove('current');
    preview.classList.remove('open');
    }
    next.addEventListener('click', function(ev) {
      navigate(1); //fram
    });
    prev.addEventListener('click', function(ev) {
      navigate(-1); //back
    });
    navigate(0);
  };