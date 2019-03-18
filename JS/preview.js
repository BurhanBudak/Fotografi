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
);

  function carousel(e){
    let box = document.querySelector('.carouselbox');
    let next = box.querySelector('.next');
    let prev = box.querySelector('.prev');
    let items = box.querySelectorAll('.content li');
    let i = Number(e.currentTarget.querySelector('.card-front img').id);
    let counter = i; //Ger den aktuella talet vid klick
    let amount = items.length; //Nodelista
    let current = items[i]; //Aktuella positionen
    box.classList.add('active');
    function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      if (direction === -1 && counter < 0) { 
        counter = amount - 1; 
      }
      if (direction === 1 &&  counter>11) { 
        counter = 0;
      }
      current = items[counter];
      console.log(counter);
      current.classList.add('current');
    }//Navigator
    previewClose.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if(e.key == 'Escape') {
        close();
      }
    });
    function close() {
      counter = 0; //Nollställer
      console.log(counter);
      current.classList.remove('current');
      preview.classList.remove('open');
    };
    document.addEventListener('keydown', function(e){
      if (e.keyCode == 39) {
        navigate(1); //fram
      }
      else if(e.keyCode == 37){
        navigate(-1); //back
      }
    });
    next.addEventListener('click', function() {
      navigate(1); //fram
    });
    prev.addEventListener('click', function() {
      navigate(-1); //back
    });
    navigate(0);
  };