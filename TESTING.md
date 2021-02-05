# Bad Day Fixer MS2 - Testing Details

## **How did I test?**

[W3C Markup Validation Service](https://validator.w3.org/)

-   W3C Markup Validation Service has been used for the testing of the  **HTML**  and  **no error**  was found. The result can be seen here  [\[HTML Test\]](https://github.com/lisa1Q84/bad-day-fixer/blob/master/assets/images/HTML_TEST.png)

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

-   W3C CSS Validation service has been used to check the  **CSS**  of the project and  **no error**  was found. The result can be seen here.  [\[CSS Test\]](https://github.com/lisa1Q84/bad-day-fixer/blob/master/assets/images/CSS_TEST.png) 

The Project was tested for Browser compatibility on multiple versions of IE, Chrome and Safari

It was found that "the CSS `transform:` property is not supported by some older browsers" and "The `display: flex` CSS property does not work correctly in some browsers."

Other than that it was suggested to make improvements in the area of Search Engine Optimisation by adding more links and headlines and offering a HTML site map. 


**Client Stories Testing**

Testing client stories from UX part of README.md

1.  Users want to easily, intuitively  navigate the site
    -   The Navigation Bar with the 'Start' link is always fixed on top of the page, It doesn't matter what section of the site they are in.
    
    -   The questions are in the center of the page, all buttons are working and the path from beginning to end is intuitive. 
    
2.  Users want to easily be able to smoothly use all the desired function of the site.

    -   Forms, buttons and the quote generator are functional. 
    - I have tested the website across multiple screen sizes and have found no issues thus far.
    
3.  Users want to  have an interactive experience when using the site.
    
    -  A number of images, different types of forms including a dynamically generated list as well as a form which saves the input in the local storage and displays it later, a quote generator make the site interactive. 
    
4.  Users want the site to be visually appealing and well presented.
    
    -   The site is very simply designed in black and white. Some images and button hoover colours make it lively. 
    
5. Users want to improve their day

    -   The website was shown to a few people who thought the idea was interesting and made them smile. 
    

**Manual Testing of all elements and functionality of every page.**

-   **Navigation Bar**
    
    1.  Check if the  **navbar**  is situated always on top (slightly down to have the attached logo show fully)

-   **Sections**

    1.   Click The  **Yes/No Buttons** and check if it brings the user to the next section.
    2.  Click the  **Submit Button**  button and check if after entering worries and the input is stored in the local storage and displayed later. 
    3.  Click the  **Get Fortune Cookie Button**, and check if the first quote appears. If it is clicked again, other quotes appear.
    4.  Click the  **Plus Button**, check if the rows are aligned below each other and whether the input can be deleted
    5.  Check if the  **Next**,button appears after 5 items have been put into the gratitude list
    6.  Click the  **Carousel Prev/Next Arrows**, check if the slides move and whether the 'next button' appears under the carousel after the last slide.
    7.  Check for  **Nav buttons below the carousel**, check if the slides move when clicking on the circles.
    8.  Check the **Carousel**, see if the quotes on top of the images are readable. 

  
-   **Content**
    
    1.  Check the content in the blog.
    2.  Check spelling by online spelling and grammar checker  [Grammarly.com](https://app.grammarly.com/). Few spelling mistakes were found, which were corrected.
    

**Project Barrier**

-   After first using a carousel by bootstrap I decided to make my own Vanilla Javascript Carousel based on a tutorial (see credits in README). I had a problem with hiding the carousel as adding this class broke it, therefore I decided to create the element in JS. I was unable to speed up the loading time.

-   I first tried using the XMLHttpRequest Method to fetch the quote from the API, however I was unable to make it work and then decided to use the jquery ajax fetch function. To make it work I replaced the slim jquery to regular jquery.

- Due to poor time management from my side I was unable to add more sections to the Menu Bar such as an "About" or "Contact Us" page which would have been a great addition to the page.

- My mentor suggested to, instead of bringing the users to a new website in the beginning, I should use an iframe to display the newspaper part on the main page.If I had more time I would have attempted that.


**Bug report**

- Bug: Scrollbar on the bottom when in the mobile view. Fixed this by moving the image width and height to CSS and by making them smaller. 

- Bug: Carousel images look stretched in mobile view. I did not find out how to fix this because every attempt to fix it ended in me disabling the carousel. I kept it because the important part in the carousel are the reviews. 

- Bug: The worry-form does not accept an entry when the key enter is pressed.

-Bug: After clicking the fortune cookie button, it takes around 5 seconds to load the first quote.



