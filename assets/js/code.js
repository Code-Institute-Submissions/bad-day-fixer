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



function showInput() {
    var worries=document.getElementById("worries").value
    display_worries.innerHTML= worries;
    
}

