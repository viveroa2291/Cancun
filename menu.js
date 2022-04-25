
/*
var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
   document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
if(x < 2)
  {
      x = 2;
  }
  document.getElementById('output-area').innerHTML = --x;
  
}
*/
function vegetarian() {
   
    var x = 1;

    document.getElementById('output-area').innerHTML = x;
    
    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const foodType = document.getElementById('food-type'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');
    const price = document.getElementById('price');
    const plusButton = document.getElementById('plus-button');
    const minusButton = document.getElementById('minus-button');

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    const headerTitles = ["Vegetarian Fajita", "Burritos De Frijol", "Burrito Vegetariano"];
    const prices = [14.99, 12.99, 11.99];
    const headerDescritpions = ["Grilled bell peppers, onions, tomato, potatoes, carrots, zucchini, yellow squash and mushrooms. <br> Served with rice, beans and lettuce.",
     "Two bean burritos topped with cheese sauce. <br> Served with rice and lettuce.", 
     "A large flour tortilla filled with grilled bell peppers, onions, potatoes, zucchini, carrots, yellow squash, tomatoes and mushrooms. <br> Topped with cheese sauce and served with rice and lettuce."];

    const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
        minusButton.addEventListener('click', () => { 
            if(x < 1) // Number cannot go under 0
            { 
                x = 1;
                price.innerHTML = "$ " + prices[s] * x; 
                document.getElementById('output-area').innerHTML = x;
            }
            else {
                price.innerHTML = "$ " + prices[s] * x;
            }     
        })
        plusButton.addEventListener('click', () => price.innerHTML = "$ " + prices[s] * x); // If clicked, it will update the price 
     //   minusButton.addEventListener('click', () => price.innerHTML = "$ " + prices[s] * x); // If clicked, it will update the price
        price.innerHTML = "$ " + prices[s] * x; 
    }
    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

    advance(0);  
}
function tacos() {
    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const foodType = document.getElementById('food-type'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');

    const headerTitles = ["Steak Tacos", "Chicken Tacos", "Chorizo Tacos", "Upcoming Events"];
    const headerDescritpions = ["These are steak tacos, usually served with two tortillas (can ask for one) along with onions and cilantro. <br> You can order them individually or have them come in a serving of three. <br> You can also order it plain if you don't like onions or cilantro, or you can add other toppings such as tomatoes, lettuce, and guac.",
     "These are chicken tacos, usually served with two tortillas along with onions and cilantro. <br> You can order them individually or have them come in a serving of three. <br> You can also order it plain if you don't like onions or cilantro, or you can add other toppings such as tomatoes, lettuce, and guac.", 
     "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
    const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
    }
    previousButton.addEventListener('click', () => advance(-1));
    nextButton.addEventListener('click', () => advance(1));

    advance(0); 
}
function burrito() {
    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const foodType = document.getElementById('food-type'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');

    const headerTitles = ["Steak Burritos", "Chicken Burritos", "Contact Us", "Upcoming Events"];
    const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
    const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
    }
    previousButton.addEventListener('click', () => advance(-1));
    nextButton.addEventListener('click', () => advance(1));

    advance(0); 
}
function enchiladas() {
    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const foodType = document.getElementById('food-type'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');

    const headerTitles = ["Steak Burritos", "Chicken Burritos", "Contact Us", "Upcoming Events"];
    const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
    const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
    }
    previousButton.addEventListener('click', () => advance(-1));
    nextButton.addEventListener('click', () => advance(1));

    advance(0); 
}
function seafood() {
    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const foodType = document.getElementById('food-type'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');

    const headerTitles = ["Steak Burritos", "Chicken Burritos", "Contact Us", "Upcoming Events"];
    const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
    const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
    }
    previousButton.addEventListener('click', () => advance(-1));
    nextButton.addEventListener('click', () => advance(1));

    advance(0); 
}
function fajitas() {
    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const foodType = document.getElementById('food-type'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');

    const headerTitles = ["Steak Burritos", "Chicken Burritos", "Contact Us", "Upcoming Events"];
    const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
    const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
    }
    previousButton.addEventListener('click', () => advance(-1));
    nextButton.addEventListener('click', () => advance(1));

    advance(0); 
}
function beverages() {
    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const foodType = document.getElementById('food-type'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');

    const headerTitles = ["Steak Burritos", "Chicken Burritos", "Contact Us", "Upcoming Events"];
    const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
    const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
    }
    previousButton.addEventListener('click', () => advance(-1));
    nextButton.addEventListener('click', () => advance(1));

    advance(0); 
}