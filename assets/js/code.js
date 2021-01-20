/* FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 1 */ 

var btn1Yes = document.getElementById('button-badday-yes');
var btn1No  = document.getElementById('button-badday-no');
var opt1Yes = document.getElementById('option-question-2');
var opt1No  = document.getElementById('option-news');

btn1Yes.addEventListener('click', function(){
  opt1Yes.className = ''; 
  opt1No.className = 'hidden';
  $(".question-1").hide()
});

btn1No.addEventListener('click', function(){
  opt1No.className = ''; 
  opt1Yes.className = 'hidden'
});





/* FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 2 */ 

var btn2Yes = document.getElementById('button-fix-yes');
var btn2No  = document.getElementById('button-fix-no');
var opt2Yes = document.getElementById('option-fix-yes');
var opt2No  = document.getElementById('option-space-facts');

btn2Yes.addEventListener('click', function(){
  opt2Yes.className = ''; 
  opt2No.className = 'hidden';
  $("#option-question-2").hide();
});

btn2No.addEventListener('click', function(){
  opt2No.className = '';
  opt2Yes.className = 'hidden';
  $("#option-question-2").hide();
});



/* FUNCTION TO SHOW QUESTION 3 AFTER 'SUBMIT' BUTTON IS CLICKED */ 


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

/* FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 3 */ 


var btnYes3 = document.getElementById('option3yes');
var btnNo3  = document.getElementById('option3no');
var optYes3 = document.getElementById('self-care');
var optNo3  = document.getElementById('option1-no');

btnYes3.addEventListener('click', function(){
  optYes3.className = ''; 
  optNo3.className = 'hidden';
  $("#badDayQuestion").hide();
  $(".container.q1").hide()
  $("#gif-container").hide()
  $(".image-container").hide();
});

btnNo3.addEventListener('click', function(){
  optNo3.className = '';
  optYes3.className = 'hidden';
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

var getworries = localStorage.getItem('userWorries');

document.getElementById("put-worries").textContent= getworries


/* GRATITUDE LIST */ 


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


