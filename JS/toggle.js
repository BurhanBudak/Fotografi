let burger = document.querySelector('.toggle');


burger.addEventListener('click', function(){
        burger.classList.toggle('change');
        document.querySelector('.sidenav').classList.toggle('active');
});



        