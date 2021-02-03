

/// FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 1 

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


//BUTTON TO GO FROM SPACE FACTS TO FORTUNE COOKIE

 var G2FButton = document.getElementById('G2FButton');
    var fortuneCookieSection = document.getElementById('fortune-generator');

  G2FButton.addEventListener('click', function(){
        fortuneCookieSection.className = ''; 
    $("#self-care").hide();
    $(".next-button").hide()
    $("#gif-container").hide()
    $("#gratitude").hide();
    $(".image-container").hide();
    $("#selfcare-carousel").hide();
    $("#FortuneButton").hide();
    $("#option-space-facts").hide();
    
})




// FUNCTION TO SHOW GIF & QUESTION 3 AFTER 'SUBMIT WORRIES' BUTTON IS CLICKED 


// Code for showing alert when worries-field is left empty

 $("#summongif").click(function(){


    if($('#worries').val() == ''){
        alert('Please enter something :) ');
        return false;
    }


//Code for storing form entry 

  let userWorries=document.getElementById("worries").value;
  localStorage.setItem('userWorries',userWorries);
  console.log(`User Worries:  ${userWorries}`);


  $("#gif-container").show();
  $(".container.q1").hide()
  $("#option1-yes").hide();
  $(".image-container").hide();
  $("#option-fix-yes").hide()

  // Code for showing self-care question

  $("#question3").show();
    
    
});



// FUNCTION TO SHOW CONTENT BASED ON WHAT USER ANSWERS TO QUESTION 3  (SELFCARE YES? / NO?)

var btn3Yes = document.getElementById('selfcare-yes');
var btn3No  = document.getElementById('selfcare-no');
var opt3Yes = document.getElementById('selfcare-carousel');
var opt3No  = document.getElementById('option-space-facts');

btn3Yes.addEventListener('click', function(){

  document.querySelector('#selfcare-carousel').classList.remove('invisible');
  
  $("#question3").hide();
  $("#gif-container").hide()
});

btn3No.addEventListener('click', function(){
  opt2No.className = '';
  opt2Yes.className = 'hidden';
  $("#option-question-2").hide();
  $("#question3").hide();
  $("#gif-container").hide()
});


// FUNCTION TO PRESS NEXT BUTTON TO GO TO GRATITUDE LIST 

/*

var nextsection = document.getElementById('gratitude');

$('#next-button').click(function () {
    nextsection.className = ''; 
    $("#self-care").hide();
  $(".next-button").hide()
  $("#gif-container").hide()
  $(".image-container").show();

}) */

// SELF CARE CAROUSEL //

   const selfCareYes=document.querySelector("#selfcare-yes");

    selfCareYes.addEventListener('click',function(){

      let sliderParent=document.querySelector("#selfcare-carousel");

      let mainSlider=document.createElement('div');
      mainSlider.classList.add('carousel');
      mainSlider.innerHTML=
      
  `<div class="carousel__track-container">
      <ul class="carousel__track">
          <li class="carousel__slide current-slide">
              <img class="carousel__image" src="assets/images/4.png" alt="">
          </li>
          <li class="carousel__slide">
              <img class="carousel__image" src="assets/images/1.png" alt="">
          </li>
          <li class="carousel__slide">
              <img class="carousel__image" src="assets/images/3.png" alt="">
          </li>
          <li class="carousel__slide">
              <img class="carousel__image" src="assets/images/2.png" alt="">
          </li>
      </ul>
  </div>
  
  <button class="carousel__button carousel__button--right"><i class="fas fa-chevron-right"></i></button>
  <button class="carousel__button carousel__button--left"><i class="fas fa-chevron-left"></i></button>

<div class="carousel__nav">
  <button class="carousel__indicator current-slide"></button>
  <button class="carousel__indicator"></button>
  <button class="carousel__indicator"></button>
  <button class="carousel__indicator"></button>

</div>
  
  `;

  sliderParent.append(mainSlider);
      


  //SelfCarousel Code here

      $("#selfcare-carousel").ready(function(){
        

              /* SELF CARE CAROUSEL */

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
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
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
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
    } else if (targetIndex === slides.length -1 ){
        prevButton.classList.remove('hidden')
        nextButton.classList.add('hidden')
        document.querySelector('#GratitudeButton').classList.remove('hidden')
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


// Event trigger when on last slide to show a button 

$('#selfcare-carousel').bind('slid', function (e) {
    var index = $(e.target).find(".current-slide").index();
    if(targetIndex === slides.lenght -1) {
    document.getElementById("GratitudeButton").innerHTML ='';
    alert('slide4 displayed!')}
})
      })
    });



    

// BUTTON TO LEAD TO GRATITUDE LIST AFTER LAST CAROUSEL SLIDE

var nextBtnCarousel = document.getElementById('GratitudeButton');
var fortuneCookiediv = document.getElementById ('gratitude')

nextBtnCarousel.addEventListener('click', function(){
  fortuneCookiediv.className = ''; 
  $("#G2FButton").hide()
  $("#option-space-facts").hide()
  $("#selfcare-carousel").hide()
  $(".question-1").hide()

  
});


// FUNCTION TO INSERT WORRIES INTO DIV JUST BEFORE GRATITUDE LIST // 

  let userFeedBack=localStorage.getItem("userWorries");
  document.getElementById("put-worries").innerHTML = userFeedBack;



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

//MAKE BUTTON APPEAR AFTER 5 ITEMS HAVE BEEN ADDED

    let lenght=$(".gratitude").length;
    if(lenght===4)
    {
    FortuneButton.classList.remove('hidden');
    }
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

}

//BUTTON TO GO FROM GRATITUDE LIST TO FORTUNE COOKIE GENERATOR

    var fortuneButton = document.getElementById('FortuneButton');
    var fortuneCookieSection = document.getElementById('fortune-generator');

  fortuneButton.addEventListener('click', function(){
        fortuneCookieSection.className = ''; 
    $("#self-care").hide();
    $(".next-button").hide()
    $("#gif-container").hide()
    $("#gratitude").hide();
    $(".image-container").hide();
    $("#selfcare-carousel").hide();
    $("#FortuneButton").hide();
})






// FORTUNE COOKIE GENERATOR WITH API //


const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  console.log("quote button was clicked");
}

const endpoint = 'https://bad-fortune-cookie.herokuapp.com/fortunes/?format=json'

async function getQuote() {
  // The `try` block executes the statements within it as usual.
  // If an exception is thrown, the statements defined in
  // the `catch` block will be executed.
  // Learn more here: https://javascript.info/try-catch
  try {
    const response = await fetch(endpoint)
    // If the response is not 200 OK...
    if (!response.ok) {
      // ...throw an error. This causes control flow
      // to skip to the `catch` block below.
      throw Error(response.statusText)
    }

    const json = await response.json();
    displayQuote(json);
  } catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
  }
}

function displayQuote(fortune) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = fortune;
} 


/*const baseURL = "	https://api.fungenerators.com";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    getData(type, function(jsquotetext) {
        document.getElementById("jsquotetext").innerHTML = jsquotetext;
    }) */ 
