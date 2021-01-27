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



//FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 2 

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

// FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 3  




// FUNCTION TO PRESS NEXT BUTTON TO GO TO GRATITUDE LIST 



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




/* SELF CARE CAROUSEL */

const track = document.querySelector('.carousel__track');
const slides =Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// put slides next to each other

const setSlidePosition = (slide, index) => {
slide.style.left= slideWidth * index + 'px' }

slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform =' translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

}

const hideShowArrows = (slides, targetIndex, prevButton, nextButton) => {
      if (targetIndex === 0) {
        prevButton.classList.add('hidden')
        nextButton.classList.remove('hidden')
    } else if (targetIndex === slides.lenght -1 ){
        prevButton.classList.remove('hidden')
        nextButton.classList.add('hidden')
    } else {
        prevButton.classList.remove('hidden')
        nextButton.classList.remove('hidden')
    }}

//move slide to the left when button 'left' is clicked

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot= currentDot.previousElementSibling;
    const prevIndex= slides.findIndex(slide => slide === prevSlide)
 
   
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);
    hideShowArrows (slides, prevIndex, prevButton, nextButton)


})

//move slide to the right when button 'right' is clicked

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot= currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    
    updateDots(currentDot, nextDot);
    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows (slides, nextIndex, prevButton, nextButton)
})

//when I click on dots move to that slide

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    
    if(!targetDot) return

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, targetIndex, prevButton, nextButton)

    });













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


