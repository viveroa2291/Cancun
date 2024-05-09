function myRotate(x) {    
    x.classList.toggle("change");
}   
function toggleNav() {    
    let elements = document.getElementsByClassName('top-nav');
    if(document.getElementById('hamburger').style.marginBottom === "10rem") {
        document.getElementById('hamburger').style.marginBottom="0";
    }
    else {
       document.getElementById('hamburger').style.marginBottom="10rem"; 
    }
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('show');
    }
}
const previousButton = document.getElementById('previous-button'); // The back button
const nextButton = document.getElementById('next-button'); // The next button
const headerDiv = document.getElementById('header'); // header title
const images = document.getElementById('images');
const descriptionDiv = document.getElementById('descriptionBody');

const headerTitles = ["Welcome", "Our Menu", "About Us", "Contact Us", "Upcoming Events"];
const headerDescritpions = ["Welcome to <b> Cancun Mexican Grill </b> website. This is the home page and will serve as a guide for the other pages to make the navigation simpler. The top right has the links to the other pages from our restaruant along with the footer of each page. The <b class='red-arrows'> Red Arrows </b> of this page will navigate you through the other pages with a description. Be sure to check out our other pages. <br/> <br/> Check out our <a class='javascriptMenu' href='menu.html'>Menu</a> section as we provide a large menu selection of the food that we serve at our restaruants. We also host various <a class='javascriptMenu' href='events.html'>Events</a> at our restaruants that you don't want to miss out on our deals. To read about our restaurant and learn about it, check out our <a class='javascriptMenu' href='about.html'>About</a> section. <br> For any questions or concerns, you can redirect yourself onto our <a class='javascriptMenu' href='contact.html'>Contact</a> section.", 
"We offer a large selection <a class='javascriptMenu' href='menu.html'>Menu</a> with prices and details about the food we serve. You can play around with the <b class='quantity'>Quantity</b> and <b class='price'>Prices</b> of the item to see the total costs. Keep in mind that <b> * Taxes * </b> are not factored into this website. <br/> </br> Our Menu consists of: <div class='menu-table'> <ul class='menu-list'><li> Vegetarian Food</li> <li> Appetizers</li> <li> Nachos </li> <li> Salads </li> <li> Tacos </li> <li> Burritos </li> <li> Enchiladas </li> <li> Quesadillas </li> <li> Seafood </li> <li> Fajitas </li> <li> Desserts </li> <li> Beverages </li> </div> <br> Be Sure to check out our menu options!",
"In the <a class='javascriptMenu' href='about.html'>About Page</a>, we dive into the history of Cancun Mexican Grill and a brief overview of our philosophy and values. Be sure to check it out.",
"Our contact page provides <b class='maps'>Maps</b> of our <b class='maps'>Store Locations</b> along with the <b class='maps'>Store Hours</b>, <b class='phone-numbers'>Phone Numbers</b>, and <b class='social-media'>Social Media</b>. Be sure to check it out if you need to contact us.", 
"Be sure to check out our <a class='javascriptMenu' href='events.html'>Upcoming Events</a> and what is happening at our restaurants or be sure to check us out on Facebook."];
const imageSource = ["images/cancun-logo.jpeg", "images/menuSelection.jpeg", "images/restaurant.jpeg", "images/at-your-service.jpeg", "images/cinco.png"];
let s = 0;

function advance(delta) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
    descriptionDiv.innerHTML = headerDescritpions[s];
    headerDiv.innerHTML = headerTitles[s];
    images.src = imageSource[s];
}
previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0);