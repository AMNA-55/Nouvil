let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let Nouvil = document.querySelector('.Nouvil');
window.onscroll = function () {
    let value = scrollY ; 
    stars.style.left = value + 'px' ;
    moon.style.top = value * 3 + 'px' ;
    mountains3.style.top = value * 2 + 'px' ;
    mountains4.style.top = value * 1.5 + 'px' ;
    river5.style.top = value + 'px' ;
    boat6.style.top = value + 'px' ;
    boat6.style.left = value + 'px' ;
    Nouvil.style.fontSize = value  + 'px' ;
    if (scrollY >= 110 ) {
        Nouvil.style.fontSize = 110  + 'px' ;
        Nouvil.style.position = 'fixed' ;
        if (scrollY >= 457) {
            Nouvil.style.display = 'none' ;
        }else{
            Nouvil.style.display = 'block' ;
        }
        if (scrollY >= 152) {
            document.querySelector('.main').style.background = 'linear-gradient(#47c9e8,hsl(249, 95%, 16%))'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#470132,hsl(249, 95%, 16%))'
        }
    }
}
