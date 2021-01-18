/* FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 1 */ 


var btnYes = document.getElementById('option1yes');
var btnNo  = document.getElementById('option1no');
var optYes = document.getElementById('option1-yes');
var optNo  = document.getElementById('option1-no');

btnYes.addEventListener('click', function(){
  optYes.className = ''; 
  optNo.className = 'hidden';
  $("#badDayQuestion").hide();
  $(".container.q1").hide()
});

btnNo.addEventListener('click', function(){
  optNo.className = '';
  optYes.className = 'hidden';
  $("#badDayQuestion").hide();
  $(".container.q1").hide()
});

/* FUNCTION TO SHOW QUESTION 2 AFTER 'SUBMIT' BUTTON IS CLICKED */ 


 $("#summongif").click(function(){


//Code for storing form entry 

  let userWorries=document.getElementById("worries").value;
  localStorage.setItem('userWorries',userWorries);
  console.log(`User Worries:  ${userWorries}`);
  $("#gif-container").show();
  console.log('it is working');

//Code for showing gif

  $(".container.q1").hide()
  $("#option1-yes").hide();
  $(".image-container").hide();
  $("#question2").show();

})

/* FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 2 */ 


var btnYes2 = document.getElementById('option2yes');
var btnNo2  = document.getElementById('option2no');
var optYes2 = document.getElementById('self-care');
var optNo2  = document.getElementById('option1-no');

btnYes2.addEventListener('click', function(){
  optYes2.className = ''; 
  optNo2.className = 'hidden';
  $("#badDayQuestion").hide();
  $(".container.q1").hide()
  $("#gif-container").hide()
  $(".image-container").hide();
});

btnNo2.addEventListener('click', function(){
  optNo2.className = '';
  optYes2.className = 'hidden';
  $("#badDayQuestion").hide();
  $(".container.q1").hide()
  $("#gif-container").hide()
  $(".image-container").show();

});

/* FUNCTION TO PRESS NEXT BUTTON TO GO TO GRATITUDE LIST */ 



var nextsection = document.getElementById('gratitude');

$('#next-button').click(function () {
    nextsection.className = ''; 
    $("#self-care").hide();
  $(".next-button").hide()
  $("#gif-container").hide()
  $(".image-container").show();

})

/* FUNCTION TO INSERT WORRIES INTO DIV */ 


//function getworriesfromlocalstorage(name) {
  //  let li = document.createElement('p');
  //  li.textContent = name;
  //  return li;


//var getworries = localStorage.getItem('userWorries');
//var testelement=getElementById("element")
//testelement.appendChild("getworries")


// var getworries = JSON.parse(localStorage.getItem('userWorries'));
//console.log('userWorries');
//var testelement=getElementById("element");
// testelement.appendChild("getworries")



//selectors
const gratitudeInput = document.querySelector('.gratitude_input');
const gratitudeButton = document.querySelector('.gratitude_button');
const gratitudeList = document.querySelector('.gratitude_list');
const filterOption = document.querySelector('.filter_gratitude');
//event listeners
gratitudeButton.addEventListener("click", addgratitude)
gratitudeList.addEventListener("click", deleteCheck)
//functions

function addgratitude(event) {
    event.preventDefault();
    //gratitude DIV
    const gratitudeDiv = document.createElement('div');
    gratitudeDiv.classList.add('gratitude');
    //gratitude LI 
    const newgratitude = document.createElement('li');
    newgratitude.innerText = gratitudeInput.value;
    newgratitude.classList.add('gratitude_item');
    gratitudeDiv.appendChild(newgratitude);
    if(gratitudeInput.value === ""){
        return null
    }
    //check mark BUTTON
    //const completedButton = document.createElement('button');
    //completedButton.innerHTML = '<i class="fas fa-check"></i>';
    //completedButton.classList.add('complete_btn')
   // gratitudeDiv.appendChild(completedButton);
   
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    gratitudeDiv.appendChild(deleteButton);
    //Append to Actual LIST
    gratitudeList.appendChild(gratitudeDiv);
    //Clear todo input VALUE
    gratitudeInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const gratitude = item.parentElement;
        //ANIMATION TRANSITION
        gratitude.classList.add("fall")
        gratitude.addEventListener('transitionend', function () {
            gratitude.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const gratitude = item.parentElement;
        gratitude.classList.toggle("completedItem")
    }
}


