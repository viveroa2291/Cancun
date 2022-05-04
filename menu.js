function myRotate(x) {    
    x.classList.toggle("change");
}   
function toggleNav() {    
    let elements = document.getElementsByClassName('top-nav');
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('show');
    }
}
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
    const disclaimer = document.getElementById('disclaimer');

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    const headerTitles = ["Vegetarian Fajita", "Burritos De Frijol", "Burrito Vegetariano"];
    const prices = [14.99, 12.99, 11.99];
    const headerDescritpions = ["Grilled bell peppers, onions, tomato, potatoes, carrots, zucchini, yellow squash and mushrooms. <br> Served with rice, beans and lettuce.",
     "Two bean burritos topped with cheese sauce. <br> Served with rice and lettuce.", 
     "A large flour tortilla filled with grilled bell peppers, onions, potatoes, zucchini, carrots, yellow squash, tomatoes and mushrooms. <br> Topped with cheese sauce and served with rice and lettuce."];
    const dis = ["* Tomatoes, sour cream and pico de gallo are complementary upon request. <hr width='25%'>"];
    const imageSource = ["vegetarian/vegetarianFajitas.png", "vegetarian/burritoDeFrijole.png", "vegetarian/burritoVegetariano.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
        disclaimer.innerHTML = dis[0];
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
function appetizers(){
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
    const disclaimer = document.getElementById('disclaimer');

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    const headerTitles = ["Queso Fundido", "Mozzarella Sticks", "Cheese Fries", "Chicken Tenders", "Cancun Sampler", "Ceviche De Camaron"];
    const prices = [9.99, 7.99, 6.99, 8.99, 7.99, 13.99,12.99];
    const headerDescritpions = ["Chorize (Mexican sausages) with cheese sauce. <br> Served with flour tortillas.", "Served with fries.", " ", "Served with fries", 
    "Refried bean dip with cream cheese.", 
    "A combo of cheese sticks, chicken tenders, chicken quesadilla & queso fundido. <br> Served with lettuce and guacamole.",
    "Fresh shrimp chopped and marinated with lime, tomato, red onions, cilantro, and diced jalapenos. <br> Served with advocado slices, chips and crackers."];
    const dis = [""];
    const imageSource = ["appetizers/quesoFundido.jpeg", "appetizers/mozzarellaSticks.jpeg", "appetizers/cheeseFries.jpeg", "appetizers/chickenTenders.jpeg", "appetizers/cancunSampler.png", "appetizers/cevicheDeCamaron.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
        disclaimer.innerHTML = dis[0];
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
function nachos() {
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
    const disclaimer = document.getElementById('disclaimer');

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    const headerTitles = ["Nachos De Mesa", "Nachos Fajitas", "Nachos With Cheese", "Nachos Supreme"]; // Come back here 04-25-22
    const prices = [12.99, 12.99, 8.99, 11.99, 10.99];
    const headerDescritpions = ["Cheese nachos with beef, chicken, and beans. <br> Topped with lettuce and shredded cheese.",
    "Your choice of Grilled Chicken or Steak with sauteed onions and bell peppers.", " ", 
    "Your choice of ground Beef or Chicken, topped with lettuce.", " "];
    const dis = ["* All nachos topped with shredded cheese and cheese sauce. * <hr width='25%'>"];
    const imageSource = ["nachos/nachosDeMesa.png", "nachos/nachoFajitas.jpeg", "nachos/nachosWithCheese.jpeg", "nachos/nachosSupreme.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
        disclaimer.innerHTML = dis[0];
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
function salads() {
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
   const disclaimer = document.getElementById('disclaimer');

   plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
   minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

   const headerTitles = ["Taco Salad", "Grilled Shrimp Salad", "Grilled Chicken Salad", "MAHI-MAHI Salad", "Taco Salad Fajitas"];
   const prices = [11.99, 12.99, 12.99, 12.99, 12.99];
   const headerDescritpions = ["A crisp flour tortilla shell stuffed with Chicken or Ground Beef, cheese sauce, lettuce and tomatoes.",
    "Seasoned delicious grilled Shrimp, fresh Romaine lettuce, tomato, red onions, croutons, cheese and diced advocado. <br> Served with our special white sauce dressing on the side.",
    "Seasoned juicy grilled Chicken breast, fresh Romaine lettuce, tomato, red onions, croutons, cheese and diced advocado. <br> Served with our special white sauce dressing on the side.",
    "Breaded or grilled Mahi-mahi fresh romaine lettuce, tomato, red onions, croutons, cheese and diced advocado. <br> Served with our home made white sauce dressing.",
    "A crisp flour tortilla a shell filled with your choice of Grilled Chicken or Steak, onions, bell peppers, and tomato. <br> Topped with cheese sauce, lettuce and tomato."];
    const dis = ["* Tomatoes, sour cream, and pico de gallo are complementary upon request. * <hr width='25%'>"];
   const imageSource = ["salads/tacoSalad.jpeg", "salads/grilledShrimpSalad.jpeg", "salads/chickenSalad.png", "salads/mahiSalad.jpeg", "salads/tacoSaladFajita.jpeg", "images/bucs.jpeg"];
   let s = 0;

   function advance(delta) {
       s = (s + delta + headerTitles.length) % headerTitles.length;
       descriptionDiv.innerHTML = headerDescritpions[s];
       foodType.innerHTML = headerTitles[s];
       images.src = imageSource[s];
       disclaimer.innerHTML = dis[0];
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
    const disclaimer = document.getElementById('disclaimer');

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    const headerTitles = ["Tacos Carne Asada", "Tacos Carnitas", "Tacos Chorizo", "Tacos Al Pastor", "Tacos Pollo Asado", "Tacos De Camaron", "Fish Tacos"];
    const prices = [12.99, 12.99, 12.99, 12.99, 12.99, 12.99, 13.99];
    const headerDescritpions = ["Two grilled steak tacos topped with onions and cilantro. <br> Served with rice, beans, and salsa.",
    "Two shredded pork tacos topped with onions and cilantro. <br> Served with rice, beans, and salsa.",
    "Two Mexican grilled sausage tacos topped with onions & cilantro. <br> Served with rice, beans, and salsa.",
    "Two marinated pork tacos topped with onions and cilantro. <br> Served with rice, beans, and salsa.", 
    "Two grilled chicken tacos topped with cheese & lettuce. <br> Served with rice, beans, and salsa.",
    "Two grilled shrimp tacos topped with cheese & lettuce. <br> Served with rice, beans, and salsa.",
    "Three Mahi-Mahi tacos, breaded or grilled, topped with cabbage, red onions, avocado and our house made Salsa Rosada. <br> Try with chipotle aioli or white sauce."];
    const dis = ["Your choice of corn or flour tortillas. With Red salsa or Green mild salsa. Pico de gallo on request. <br> EXTRA Taco $4.50. <hr width='25%'>"];
    const imageSource = ["tacos/carneAsadaTacos.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        disclaimer.innerHTML = dis[0];
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
function burrito() {
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
    const disclaimer = document.getElementById('disclaimer');

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    const headerTitles = ["Burrito Norteno", "Don Burrito", "Burrito De Carnitas", "Burrito Deshebrada", "Buritos Mexicanos", "Burrito Cancun", "Burrito De La Mesa", "Burrito Bowl"];
    const prices = [12.99, 12.99, 12.99, 12.99, 14.99, 13.99, 11.50, 12.99];
    const headerDescritpions = ["Large flour tortilla filled with cooked pork, cilantro, onions, rice, and beans. <br> Topped with burrito sauce and served with lettuce.",
     "Large flour tortilla fillled with your choice of grilled chicken or steak, cheese sauce, rice and beans. <br> Covered with burrito sauce and cheese sauce. <br> Served with lettuce.", 
     "Large flour tortilla filled with cooked pork fajitas, cheese, rice, and beans. <br> Topped with burrito sauce.",
    "Large flour tortilla filled with seasoned shredded beef, rice, beans, cheese sauce, and lettuce. <br>Topped with burrito sauce.",
    "Two burritos filled with your choice of grilled chicken, fajitas or grilled steak fajitas, covered with cheese. <br> Topped with lettuce.",
    "Shrimp, onions, potatoes, zucchini, carrots, yellow squash, tomato, mushrooms, cheese, <br> and creamy chipotle sauce grilled to perfection and wrapped in a large flour tortillas. <br> Topped with burrito sauce.", 
    "Burrito filled with ground beef or cooked chicken, covered with burrito sauce and topped with lettuce and tomato. <br> Served with rice and beans.",
    "Your choice of meat serving on a bowl: <div style='display: flex; flex-direction: row; justify-content: center; margin-left: 750px; margin-right: 750px;'> <div> <ul> <li>Fajita Steak</li><li>Fajita Chicken</li><li>Fajita cooked Pork</li><li>Grilled Steak</li><li>Grilled Chicken</li><li>Shredded Beef</li></ul> </div> <hr style='transform: rotate(0);'> <div> <b>Toppings:</b> <ul> <li>Rice</li> <li>Beans</li> <li> Lettuce </li> <li> Cheese </li> <li> Tomato </li> <li> Sour Cream </li> <li> Cheese Sauce </li> <li> Pico De Gallo </li> <li>Mild Sauce</li> <li>Hot Sauce </li></ul> </div> </div>"];
    const dis = ["* Your choice of burrito sauce or tomatillo green mild sauce. * <hr width='25%'>"];
    const imageSource = ["vegetarian/vegetarianFajitas.png", "vegetarian/burritoDeFrijole.png", "vegetarian/burritoVegetariano.jpeg"];
    let s = 0;

    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
        descriptionDiv.innerHTML = headerDescritpions[s];
        foodType.innerHTML = headerTitles[s];
        images.src = imageSource[s];
        disclaimer.innerHTML = dis[0];
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

    const headerTitles = ["Seafood Vallarta", "Ceviche De Camaron", "Mazatlan", "Enchiladas Acapulco", "Cocktel De Camaron", "Quesadilla De Camaron", "Enchiladas Cancun", "Camarones A La Diabla", "Los Cabos Shrimp", "Camarones Al Chipotle", "Shrimp Relleno", "Mojarra Frita", "Cozumel"];
    const prices = [13.99, 12.99, 12.99, 14.99, 16.99, 14.99, 14.99, 15.99, 15.99, 15.99, 12.99, 19.99, 14.99];
    const headerDescritpions = ["Two flour wraps filled with shrimp and crab. <br> Then smothered with cheese sauce. <br> Served with rice and lettuce.",
    "Fresh shrimp chopped and marinated with lime, tomato, red onions, cilantro, and diced jalapenos. <br> Served with avocado slices, chips and crackers.",
    "One shrimp quesadilla and one shrimp and crab enchilada. <br> Served with rice and lettuce.", 
    "Three shrimp and crab enchiladas. <br> Served with rice and lettuce.",
    "A delicious Mexican style shrimp cocktail prepared with tomato, onions, avocado, cilantro, cucumbers & our special cocktail sauce. <br> Served with crackers.",
    "A large flour tortilla filled with cheese and grilled shrimp. <br> Served with rice and lettuce.",
    "Three enchiladas filled with shrimp & crab. <br> Served with rice and mixed vegetables.", 
    "Shrimp onions and potatoes cooked and simmered in a mild or spicy sauce. <br> Served with rice and lettuce.",
    "Grilled shrimp placed on top a bed of rice. <br> Smothered with cheese sauce. <br> Served with lettuce.",
    "Shrimp, onions, potatoes, zucchini, carrots, yellow squash, tomato and mushrooms, cooked on a creamy chipotle sauce. <br> Served with rice and lettuce.",
    "A roasted poblano pepper stuffed with cheese and grilled shrimp. <br> Topped with mild red sauce and cheese sauce. <br> Served with rice.",
    "Tilapia seasoned and fried whole. <br> Served with rice, lettuce, and fresh avocado.",
    "Two 4oz Mahi-mahi steaks, seasoned and grilled with mushrooms, lemon juice and white wine. <br> Served on a bed of rice and smothered with cheese sauce. <br> Your choice offlour or corn tortillas."];

    const imageSource = ["seafood/seafoodVallarta.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
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