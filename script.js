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


  let cardHtmlBtn = document.querySelectorAll('div.card-body .btn')[1];
  let cardText = document.querySelectorAll('div.card-body p')[0];
  
  cardHtmlBtn.addEventListener('click',function(){
    cardText.style.color='red' 
  });


  let cardHtmlBtn2 = document.querySelectorAll('div.card-body .btn')[3];
  let cardText2 = document.querySelectorAll('div.card-body p')[1];
  
  cardHtmlBtn2.addEventListener('click', function(){
    if(cardText2.style.color === 'green'){
      cardText2.style.color= '';
    }else{
      cardText2.style.color = 'green';
    }
  });

  let bootstrapCdn = document.querySelector('head link');
  let navBar = document.getElementsByTagName('header')[0];
  
  navBar.addEventListener('dblclick',function(){
    if (bootstrapCdn.href==="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
      bootstrapCdn.href=""; 
    }else{
      bootstrapCdn.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    }
  });


