let flexs = document.querySelectorAll('.flex-item-inner');
let preview = document.querySelector('.preview');
let previewClose= preview.querySelector('.close');

flexs.forEach(flexItemInner => flexItemInner.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width:718px)').matches){
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
    let next = preview.querySelector('.next');
    let prev = preview.querySelector('.prev');
    let items = box.querySelectorAll('.content li');
    let i = Number(e.currentTarget.querySelector('.card-front img').id);
    let counter = i;
    console.log(counter);
    let current = items[counter]; //Aktuell bild man har valt
    function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      if(counter < 0) { 
        counter = 11;
      }
      if(counter > 11) { 
        counter = 0;
      }
      current = items[counter];
      console.log(counter);
      current.classList.add('current');
    }//Navigator
    previewClose.addEventListener('click', close);
    next.addEventListener('click', function() {
      navigate(1); //framåt
    });
    prev.addEventListener('click', function() {
      navigate(-1); //bakåt
    });
    document.addEventListener('keydown', function (e) {
      if(e.key == 'Escape') {
        close();
      }
      else if (e.keyCode == 39) {
        navigate(1); //framåt
      }
      else if(e.keyCode == 37){
        navigate(-1); //bakåt
      }
    });
    function close() {
      console.log(counter);
      current.classList.remove('current');//Tar bort den senaste valde bilden
      preview.classList.remove('open');
      return counter = 0; //Nollställer när man stänger
    };
    navigate(0);
  };