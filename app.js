/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 *
 */

//DOM elements
//creat global var for nnavigator bar
const menuBarList = document.getElementById("navbar__list");
//creat global var for sections
//using method querySelectorAll to select all sections
const mySections = document.querySelectorAll("section");
//Creat an imaginary variable to save information and items, this helps to quickly open and download the page.
const imagFragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 *
 * End Helper Functions
 * Begin Main Functions 
 */

//Build the dynamic nav list
//creat menu items
// add function
function buildDynamicNav() {
    //creat for of loop, to looping all section
    for (const section of mySections) {
        //add the section id,by using getAttribute method
        const idOfSection = section.getAttribute("id");
        //add section data_nav,by using getAttribute method
        const titleOfSection = section.getAttribute("data-nav");
        //creat li element, by using createElement method
        const listMenuItemes = document.createElement("li");
        //appends
        //append to add sections list navigation bar
        listMenuItemes.innerHTML = `<a class="menu__link" href="#${idOfSection}">${titleOfSection}</a>`;
        //append the menu list to the lu Nav bar list
        menuBarList.appendChild(listMenuItemes);
        //append Nav bar list to Fragment
        imagFragment.appendChild(listMenuItemes);
    } //end for loop
    //append Fragment to the Nav bar list
    menuBarList.appendChild(imagFragment);
} //end function
// Add class 'active' to section when near top of viewport

//gives the active section different appearance
//creat function 
function setActiveionSection() {
    //creat for of loop,to over loop all section
    for (const section of mySections) {
        //creat var sectionPosi that save the valus of size
        const sectionPosi = section.getBoundingClientRect();
        //if conditional to set the active sctions
        if (sectionPosi.top < 250 && sectionPosi.top >= 0) {
            //get the data-nav
            //const sectionIbView = section.getAttribute("data-nav");
            //for of loop to check which currently section looking at
            for (const myListItems of mySections) {
                //remove active class form section that not currently looking at
                myListItems.classList.remove("your-active-class");
                //this color limited to the active section , this line from CSS file, lean this from 
                myListItems.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
            }
            //add active class to active section, that currently looking at
            section.classList.add("your-active-class");
            //add color background to the active section
            // learn how to add this backgroundImage from w3schools.com
            section.style.backgroundImage = "url('background.jpg')";
            //end for of loop
        }; //end if conditional
    }; //end for of loop
}; //end function


//use eventListener to select active section when scroll
window.addEventListener('scroll', setActiveionSection);

// Scroll to anchor ID using scrollTO event

//creat smooth scrolling
//creat function 
function scrollSmooth() {
    //learn how to creat smooth scrolling from lambda test web site, 
    //Detect elements,to connect scrolling to.
    //use querySelectorAll to call Class navbar__menu
    const linkNavItems = document.querySelectorAll(".navbar__menu a");
    //for of loop 
    for (const sectionActView of linkNavItems) {
        //add method addEventListener in var 
        sectionActView.addEventListener("click", smoothScrolling);
        //creat function with event attribute, this declared in addEventListener
        function smoothScrolling(event) {
            event.preventDefault();
            //Trigger the scroll property
            const targetCurrID = event.currentTarget.getAttribute("href");
            //built-in JavaScript function,to declared smooth scroll
            window.scrollTo({
                top: document.querySelector(targetCurrID).offsetTop,
                //to add the smooth scroling
                behavior: "smooth"
            }); //end of window.scrollTo function
        }; //end smoothScrolling function
    }; //end for of loop

}; //end the scrollSmooth function

//call the functions to run the function
buildDynamicNav();
scrollSmooth();

/**
 * End Main Functions
 * Begin Events
 */
// Build menu 
// Scroll to section on link click
// Set sections as active