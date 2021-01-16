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


 $.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        return this;
      }

      $("#summonPokemon").on("click", function(){
        $("#pokemon").fadeIn().center();
        setTimeout(function(){
          $("#pokemon").fadeOut()
        }, 1000);
      });





function showQuestion2() {
    var div = document.getElementById('question2');
   if (div.style.display == 'none') {
     div.style.display = '';
   }
   else {
     div.style.display = 'none';
   }
 }


