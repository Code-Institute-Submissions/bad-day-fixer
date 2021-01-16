/* FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 1 */ 


var btnYes = document.getElementById('option1yes');
var btnNo  = document.getElementById('option1no');
var optYes = document.getElementById('option1-yes');
var optNo  = document.getElementById('option1-no');

btnYes.addEventListener('click', function(){
  optYes.className = ''; 
  optNo.className = 'hidden';
});

btnNo.addEventListener('click', function(){
  optNo.className = '';
  optYes.className = 'hidden';
});


/* TRYING TO MAKE GIF APPEAR WHEN FORM SUBMIT BUTTON IS CLICKED. I FOUND THE CODE FOR THIS ON https://www.sitepoint.com/community/t/show-a-gif-on-button-click-then-hide-it/43049/9  */

 $.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        return this;
      }

      function showgif(){
        $("#explosion").fadeIn().center();
        setTimeout(function(){
          $("#explosion").fadeOut()
        }, 1000);
      };


/* FUNCTION TO SHOW QUESTION 2 AFTER 'SUBMIT' BUTTON IS CLICKED */ 

function showQuestion2() {
    var div = document.getElementById('question2');
   if (div.style.display == 'none') {
     div.style.display = '';
   }
   else {
     div.style.display = 'none';
   }
 }


