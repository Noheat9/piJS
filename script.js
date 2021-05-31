let footerCounter = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCounter++;
	console.log(`Click numéro ${footerCounter}`);
});

let hamburger = document.getElementsByClassName('navbar-toggler');

let onHamburger = function() {
  document.getElementById("navbarHeader").classList.toggle("collapse");
}

hamburger[0].addEventListener('click', onHamburger);

function Bar() {
    document.getElementById("card-img-top").onclick = Foo();
  }


function clickChangeFirst() {
    let btnElt = document.querySelectorAll('.card')[0].querySelector('.btn-outline-secondary');
    btnElt.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        e.currentTarget.style.color = 'red';
    });
}


function clickChangeSecond() {
    let btnElt = document.querySelectorAll('.card')[1].querySelector('.btn-outline-secondary');
    let defaultColor = '';
    btnElt.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.currentTarget.style.color === 'green') {
            e.currentTarget.style.color = defaultColor;
        }
        else {
            e.currentTarget.style.color = 'green';
        }
    });
}

function disabledBootstrap() {
    let btnElt = document.querySelector('.navbar');
    let linkElt = document.querySelector('link[rel="stylesheet"]');
    btnElt.addEventListener('dblclick', e => {
        e.preventDefault();
        if (linkElt.disabled) {
            linkElt.disabled = false;
        }
        else {
            linkElt.disabled = true;
        }
    });
}
