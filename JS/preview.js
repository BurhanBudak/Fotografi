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
        let index = Number(e.currentTarget.querySelector('.card-front img').id);
        carousel(index);
    }
    })//event
);//forEach
previewClose.addEventListener('click', close);
function close() {
    preview.classList.remove('open');
}

// let carousel = (
  function carousel(index){ //IFFI
    console.log(index);
    let box = document.querySelector('.carouselbox');
    let next = box.querySelector('.next');
    let prev = box.querySelector('.prev');
    let items = box.querySelectorAll('.content li');
    let counter = 0; 
    let amount = items.length;
    let current = items[0]; 
    box.classList.add('active');
    function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      if (direction === -1 && 
          counter < 0) { 
        counter = amount - 1; 
      }
      if (direction === 1 && 
          !items[counter]) { 
        counter = 0;
      }
      current = items[counter];
      current.classList.add('current');
    }
    next.addEventListener('click', function(ev) {
      navigate(1); //fram
    });
    prev.addEventListener('click', function(ev) {
      navigate(-1); //back
    });
    navigate(0);
  };