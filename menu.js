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

class MenuSelection {
    constructor(menuHeaderText, headerTitles, prices, headerDescriptions, dis, imageSource) {
        this.menuHeaderText = menuHeaderText;
        this.headerTitles = headerTitles;
        this.prices = prices;
        this.headerDescriptions = headerDescriptions;
        this.dis = dis;
        this.imageSource = imageSource;
    }
};

const vegeterian = new MenuSelection(["Vegetarian"], 
["Vegetarian Fajita", "Burritos De Frijol", "Burrito Vegetariano"], 
[14.99, 12.99, 11.99], 
["Grilled bell peppers, onions, tomato, potatoes, carrots, zucchini, yellow squash and mushrooms. <br> Served with rice, beans and lettuce.", "Two bean burritos topped with cheese sauce. <br> Served with rice and lettuce.", "A large flour tortilla filled with grilled bell peppers, onions, potatoes, zucchini, carrots, yellow squash, tomatoes and mushrooms. <br> Topped with cheese sauce and served with rice and lettuce."],
["* Tomatoes, sour cream and pico de gallo are complementary upon request. <hr width='25%'>"],
["vegetarian/vegetarianFajitas.png", "vegetarian/burritoDeFrijole.png", "vegetarian/burritoVegetariano.jpeg"]);

const appetizersClass = new MenuSelection(["Appetizers"],
["Queso Fundido", "Mozzarella Sticks", "Cheese Fries", "Chicken Tenders", "Cancun Sampler", "Ceviche De Camaron"],
[9.99, 7.99, 6.99, 8.99, 7.99, 13.99,12.99],
["Chorize (Mexican sausages) with cheese sauce. <br> Served with flour tortillas.", "Served with fries.", " ", "Served with fries", 
    "Refried bean dip with cream cheese.", 
    "A combo of cheese sticks, chicken tenders, chicken quesadilla & queso fundido. <br> Served with lettuce and guacamole.",
    "Fresh shrimp chopped and marinated with lime, tomato, red onions, cilantro, and diced jalapenos. <br> Served with advocado slices, chips and crackers."],
[""],
["appetizers/quesoFundido.jpeg", "appetizers/mozzarellaSticks.jpeg", "appetizers/cheeseFries.jpeg", "appetizers/chickenTenders.jpeg", "appetizers/cancunSampler.png", "appetizers/cevicheDeCamaron.jpeg"]);

const nachosClass = new MenuSelection(["Nachos"],
["Nachos De Mesa", "Nachos Fajitas", "Nachos With Cheese", "Nachos Supreme"],
[12.99, 12.99, 8.99, 11.99, 10.99],
["Cheese nachos with beef, chicken, and beans. <br> Topped with lettuce and shredded cheese.",
    "Your choice of Grilled Chicken or Steak with sauteed onions and bell peppers.", " ", 
    "Your choice of ground Beef or Chicken, topped with lettuce.", " "],
    ["* All nachos topped with shredded cheese and cheese sauce. * <hr width='25%'>"],
    ["nachos/nachosDeMesa.png", "nachos/nachoFajitas.jpeg", "nachos/nachosWithCheese.jpeg", "nachos/nachosSupreme.jpeg"]
);

const saladsClass = new MenuSelection(["Salads"],
["Taco Salad", "Grilled Shrimp Salad", "Grilled Chicken Salad", "MAHI-MAHI Salad", "Taco Salad Fajitas"],
[11.99, 12.99, 12.99, 12.99, 12.99],
["A crisp flour tortilla shell stuffed with Chicken or Ground Beef, cheese sauce, lettuce and tomatoes.",
    "Seasoned delicious grilled Shrimp, fresh Romaine lettuce, tomato, red onions, croutons, cheese and diced advocado. <br> Served with our special white sauce dressing on the side.",
    "Seasoned juicy grilled Chicken breast, fresh Romaine lettuce, tomato, red onions, croutons, cheese and diced advocado. <br> Served with our special white sauce dressing on the side.",
    "Breaded or grilled Mahi-mahi fresh romaine lettuce, tomato, red onions, croutons, cheese and diced advocado. <br> Served with our home made white sauce dressing.",
    "A crisp flour tortilla a shell filled with your choice of Grilled Chicken or Steak, onions, bell peppers, and tomato. <br> Topped with cheese sauce, lettuce and tomato."],
["* Tomatoes, sour cream, and pico de gallo are complementary upon request. * <hr width='25%'>"],
["salads/tacoSalad.jpeg", "salads/grilledShrimpSalad.jpeg", "salads/chickenSalad.png", "salads/mahiSalad.jpeg", "salads/tacoSaladFajita.jpeg", "images/bucs.jpeg"] 
);

const tacosClass = new MenuSelection(["Tacos"],
["Tacos Carne Asada", "Tacos Carnitas", "Tacos Chorizo", "Tacos Al Pastor", "Tacos Pollo Asado", "Tacos De Camaron", "Fish Tacos"],
[12.99, 12.99, 12.99, 12.99, 12.99, 12.99, 13.99],
["Two grilled steak tacos topped with onions and cilantro. <br> Served with rice, beans, and salsa.",
    "Two shredded pork tacos topped with onions and cilantro. <br> Served with rice, beans, and salsa.",
    "Two Mexican grilled sausage tacos topped with onions & cilantro. <br> Served with rice, beans, and salsa.",
    "Two marinated pork tacos topped with onions and cilantro. <br> Served with rice, beans, and salsa.", 
    "Two grilled chicken tacos topped with cheese & lettuce. <br> Served with rice, beans, and salsa.",
    "Two grilled shrimp tacos topped with cheese & lettuce. <br> Served with rice, beans, and salsa.",
    "Three Mahi-Mahi tacos, breaded or grilled, topped with cabbage, red onions, avocado and our house made Salsa Rosada. <br> Try with chipotle aioli or white sauce."],
    ["Your choice of corn or flour tortillas. With Red salsa or Green mild salsa. Pico de gallo on request. <br> EXTRA Taco $4.50. <hr width='25%'>"],
    ["tacos/carneAsadaTacos.jpeg", "tacos/carnitas-tacos.jpeg", "tacos/chorizo-tacos.jpeg", "tacos/al-pastor-tacos.jpeg", "tacos/pollo-asado-tacos.jpeg", "tacos/camaron-tacos.jpeg", "tacos/fish-tacos.jpeg"] 
);

const burritoClass = new MenuSelection(["Burritos"],
["Burrito Norteños", "Don Burrito", "Burrito De Carnitas", "Burrito Deshebrada", "Buritos Mexicanos", "Burrito Cancun", "Burrito De La Mesa", "Burrito Bowl"],
[12.99, 12.99, 12.99, 12.99, 14.99, 13.99, 11.50, 12.99],
["Large flour tortilla filled with cooked pork, cilantro, onions, rice, and beans. <br> Topped with burrito sauce and served with lettuce.",
     "Large flour tortilla fillled with your choice of grilled chicken or steak, cheese sauce, rice and beans. <br> Covered with burrito sauce and cheese sauce. <br> Served with lettuce.", 
     "Large flour tortilla filled with cooked pork fajitas, cheese, rice, and beans. <br> Topped with burrito sauce.",
    "Large flour tortilla filled with seasoned shredded beef, rice, beans, cheese sauce, and lettuce. <br>Topped with burrito sauce.",
    "Two burritos filled with your choice of grilled chicken, fajitas or grilled steak fajitas, covered with cheese. <br> Topped with lettuce.",
    "Shrimp, onions, potatoes, zucchini, carrots, yellow squash, tomato, mushrooms, cheese, <br> and creamy chipotle sauce grilled to perfection and wrapped in a large flour tortillas. <br> Topped with burrito sauce.", 
    "Burrito filled with ground beef or cooked chicken, covered with burrito sauce and topped with lettuce and tomato. <br> Served with rice and beans.",
    "Your choice of meat serving on a bowl: <div style='display: flex; flex-direction: row; justify-content: center; margin-left: 750px; margin-right: 750px;'> <div> <ul> <li>Fajita Steak</li><li>Fajita Chicken</li><li>Fajita cooked Pork</li><li>Grilled Steak</li><li>Grilled Chicken</li><li>Shredded Beef</li></ul> </div> <hr style='transform: rotate(0);'> <div> <b>Toppings:</b> <ul> <li>Rice</li> <li>Beans</li> <li> Lettuce </li> <li> Cheese </li> <li> Tomato </li> <li> Sour Cream </li> <li> Cheese Sauce </li> <li> Pico De Gallo </li> <li>Mild Sauce</li> <li>Hot Sauce </li></ul> </div> </div>"],
["* Your choice of burrito sauce or tomatillo green mild sauce. * <hr width='25%'>"],
["burritos/burritos-norteños.jpeg", "burritos/don-burrito.png", "burritos/carnitas-burrito.jpeg", "burritos/deshebrada-burrito.jpg", "burritos/burrito-mexicanos.jpeg", "burritos/burrito-cancun.jpeg", "burritos/burrito-de-la-mesa.jpeg", "burritos/burrito-bowl.jpeg"]
);

const enchiladaClass = new MenuSelection(["Enchiladas"],
["Enchiladas Rojas", "Enchiladas Verdes", "Enchiladas Rancheras", "Enchiladas De Mesa", "Enchiladas De Pollo", "Enchiladas Mexicanas"],
[12.99, 11.99, 11.99, 11.99, 12.99, 11.99],
["Three shredded beef enchiladas topped with cheese and ranchero sauce. <br> Served with rice and lettuce.",
    "Two chicken enchiladas topped with cheese, lettuce, sour cream, and pico de gallo. <br> Served with rice and beans.",
    "Two enchiladas filled with grilled pork, onions, bell peppers, and tomato. <br> Topped with enchilada sauce and cheese. <br> Served with rice and lettuce.",
    "Three enchiladas, one chicken, one ground beef, and one cheese. <br> Topped with enchilada sauce and cheese. <br> Served with rice and lettuce.",
    "Three chicken enchiladas topped with cheese. Served with rice and guacamole salad.",
    "Four enchiladas, one chicken, one beef, one cheese, and one bean. <br> Topped with cheese and lettuce."],
["* With Flour Tortilla <b class='flour-tortilla'>Add 99¢</b> * <hr width='25%'>"],
["enchiladas/enchiladas-rojas.jpeg", "enchiladas/enchiladas-verdes.jpeg", "enchiladas/enchiladas-rancheras.jpeg", "enchiladas/enchiladas-de-la-mesa.jpeg", "enchiladas/enchiladas-de-pollo.jpeg", "enchiladas/enchiladas-mexicana.jpeg"]
);

const quesadillasClass = new MenuSelection(["Quesadillas"],
["Cheese Quesadilla", "Chicken or Beef Quesadilla", "Fajita Quesadilla"],
[9.99, 10.99, 12.99],
[" ", "", "Your choice of Grilled Chicken or Steak with sauteed onions, tomatoes, and bell peppers."],
["* Quesadillas served with lettuce, sour cream, and tomatoes. * <hr width='25%'>"],
["quesadillas/cheese-quesadilla.jpeg", "quesadillas/chicken-quesadilla.jpeg", "quesadillas/fajita-quesadilla.jpeg"]
);

const seafoodClass = new MenuSelection(["Seafood"],
["Seafood Vallarta", "Ceviche De Camaron", "Mazatlan", "Enchiladas Acapulco", "Cocktel De Camaron", "Quesadilla De Camaron", "Enchiladas Cancun", "Camarones A La Diabla", "Los Cabos Shrimp", "Camarones Al Chipotle", "Shrimp Relleno", "Mojarra Frita", "Cozumel"],
[13.99, 12.99, 12.99, 14.99, 16.99, 14.99, 14.99, 15.99, 15.99, 15.99, 12.99, 19.99, 14.99],
["Two flour wraps filled with shrimp and crab. <br> Then smothered with cheese sauce. <br> Served with rice and lettuce.",
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
    "Two 4oz Mahi-mahi steaks, seasoned and grilled with mushrooms, lemon juice and white wine. <br> Served on a bed of rice and smothered with cheese sauce. <br> Your choice offlour or corn tortillas."],
[""],
["seafood/seafoodVallarta.jpeg", "seafood/ceviche-de-camarones.jpeg", "seafood/Mazatlan.jpeg", "seafood/enchiladas-acapulco.jpeg", "seafood/coctel-de-camaron.jpeg", "seafood/quesadilla-de-camaron.jpeg", "seafood/enchiladas-cancun.jpeg", "seafood/camarones-la-diabla.jpeg", "seafood/los-cabos-shrimp.jpeg", "seafood/camarones-al-chipotle.jpeg", "seafood/shrimp-relleno.jpeg", "seafood/mojarra-frita.jpeg", "seafood/cozumel.jpeg"]
);

const fajitasClass = new MenuSelection(["Fajitas"],
["Fajitas Rancheras", "Fajitas Skillet", "Fajita Platter", "Shrimp Fajitas Skillet", "Fajitas Jalisco", "Fajitas De Carnitas", "Fajitas Tulum"],
[18.99, 17.99, 13.99, 19.99, 18.99, 16.99, 14.99],
["Grilled steak, chicken, shrimp, and chorizo.",
    "",
    "",
    "",
    "Grilled steak, chicken, and shrimp.",
    "Our special hometown pork tips recipe.",
    "Shrimp and Mahi-mahi, spicy and grilled to perfection, onions, potatoes, zucchini, carrots, yellow squash, tomato, and mushrooms."],
["* Fajitas are grilled with onions, bell peppers, and tomatoes. <br> Served with a side of rice, beans, and lettuce. <br> <b class='fajita-side'>Add 1 additional side for $6</b> * <hr width='25%'>"],
["fajitas/fajitas-rancheras.jpeg", "fajitas/fajitas-skillet.jpeg", "fajitas/fajitas-platter.jpeg", "fajitas/fajitas-shrimp-skillet.jpeg", "fajitas/fajitas-jalisco.jpeg", "fajitas/fajitas-de-carnitas.jpeg", "fajitas/fajitas-tulum.jpeg"]
);

const dessertsClass = new MenuSelection(["Desserts"],
["Ultimate Chocolate Cake", "Grandmother's Carrot Cake", "Cheese Cake", "Cheesecake Chimichanga", "Flan", "Fried Ice Cream", "Ice Cream", "Sundae"],
[6.00, 6.00, 5.00, 7.00, 5.00, 6.00, 4.00, 4.00],
["Chocolate Heaven: a foundation of chocolate decadence, <br> a layer of chocolate mousse <br> and a layer of chocolate butter cake iced with a rich silky chocolate ganache.", 
    "A delicious moist cake is loaded with shredded carrots, pecan pieces and crushed tangy pineapple. <br> Then covered with a cream cheese butter icing and garnished with chopped walnuts.",
    "A slice of delightful cheesecake topped with chocolate syrup.",
    "A slice of cheesecake wrapped in a flour tortilla, fried, and coated with cinnamon. <br> Topped with caramel and/or chocolate syrup <br> and served with a scoop of vanilla ice cream, whipped cream and a cherry.",
    "Our famous flan is silky custard topped with a creamy caramel sauce and a cherry.",
    "A large scoop of vanilla ice cream covered with corn flakes, <br> quickly deep fried and set in a sugar and cinnamon coated tortilla shell, <br> topped with honey, whipped cream, chocolate syrup, and a cherry.",
    "",
    "Three scoops of vanilla ice cream with your choice of strawberry or chocolate syrup topped with whipped cream and a cherry."],
[""],
["dessert/chocolate-cake.jpeg", "dessert/carrot-cake.jpeg", "dessert/cheese-cake.jpeg", "dessert/cheese-cake-chimichanga.jpeg", "dessert/flan.jpeg", "dessert/fried-ice-cream.jpeg", "dessert/ice-cream.jpeg", "dessert/sundae.jpeg"]
);

const nonAlcoholics = new MenuSelection(["Non-Alcholic Drinks"],
["Pepsi", "Diet Pepsi", "Pepsi Wild Cherry", "Mountain Dew", "Diet Mountain Dew", "Root Beer", "Dr. Pepper", "Sierra Mist", "Tropicana Pink Lemonade"],
[2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 2.99],
[" ", "", "", "", "", "", "", "", ""],
[""],
["non-alcoholic/pepsi.jpg", "non-alcoholic/dietPepsi.png", "non-alcoholic/pepsi-wild-cherry.jpg", "non-alcoholic/mountainDew.jpeg", "non-alcoholic/diet-mountainDew.jpeg", "non-alcoholic/root-beer.jpg", "non-alcoholic/dr-pepper.jpeg", "non-alcoholic/sierra-mist.jpeg", "non-alcoholic/tropicana-pink-lemonade.jpeg"]
);

const alcoholics = new MenuSelection(["Alcholic Drinks"],
["Daiquiris", "Mojitos", "Pina Colada", "Beers-Domestic on Tap", "Beers-Imported", "Domestic Bottled Beers", "Perfect Margarita", "House Margarita", "Spicy Jalapeno", "Spicy Mango", "Cucumber Margarita", "Coronarita", "Tequila Sunrise / Paloma"],
[8.50, 8.99, 8.50, 5.99, 6.99, 3.99, 4.99, 9.00, 12.99, 12.99, 12.99, 11.99, 8.99],
["Strawberry, Raspberry Mango and Peach.", 
    "Lime, Strawberry, Raspberry Mango and Peach.",
    "",
    "Bud Light, Michelob Gold, Leinenkugel's Honey Weiss, Miller Lite.",
    "Dos Equis Lager, Negra Modelo",
    "64 Bud Light, Bud Light Lime, Budweiser, Michelob Gold, <br> Leinenkugel's Honey Weiss, Coors Light, Busch Light, Miller Lite, Miller 55 Ultra.",
    "Corona, Corona Light, Corona Familiar, Victoria Pacifico, <br> Modelo Especial, Negra Modelo, Estrella Sol, Tecate, Dos Equis Lager, Dos Equis Amber.",
    "Made with 100% agave tequila, fresh lime juice, organic agave, nectar, and orange liquor.",
    "Made with Resposado Tequila Gold, sweet & sour, orange liquour and lime juice. <br> Flavors: <div class='menu-table'> <ul class='menu-list'><li> Lime</li> <li> Strawberry</li> <li> Mango </li> <li> Peach </li> <li> Raspberry Banana</li> <li> Tamarindo </li>",
    "Tequila Exotico Silver 100% Agave, fresh-squeezed lime juice, organic agave nectar, spicy mango premium gourmet syrup and tajin chili salt rim.",
    "Tequila Exotico Silver 100% Agave, fresh-squeezed lime juice, organic agave nectar, spicy mango premium gourmet syrup and tajin chili salt rim.",
    "Tequila Exotico Silver 100% Agave, fresh-squeezed lime juice, organic agave nectar, triple sec, pineapple juice, fresh cucumber, tajin chili salt rim and basil.",
    "Margarita & Coronita.", 
    ""],
["* Monday & Tuesday 50% Off House <br> Ask About Our Premium Tequila Selection *"],
["alcoholic/daiquiris.jpeg", "alcoholic/mojitos.jpeg", "alcoholic/pina-colada.jpeg", "alcoholic/beers-imported-on-tap.jpeg", "alcoholic/beers-imported.jpeg", "alcoholic/domestic-imported-beers.jpeg", "alcoholic/perfect-margarita.jpeg", "alcoholic/house-margarita.jpeg", "alcoholic/jalapeno.jpeg", "alcoholic/spicy-mango.jpeg", "alcoholic/cucumber.jpeg", "alcoholic/coronarita.jpeg", "alcoholic/tequila-sunrise.jpeg"]
);

var x = 1;

document.getElementById('output-area').innerHTML = x;

const menuHeader = document.getElementById('menu-header');
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

var s = 0;

function advance(delta, menuHeaderText, headerTitles, prices, headerDescriptions, dis, imageSource) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
    console.log("s: " + s);
    console.log("Length: " + headerTitles.length);
    descriptionDiv.innerHTML = headerDescriptions[s];
    foodType.innerHTML = headerTitles[s];
    images.src = imageSource[s];
    disclaimer.innerHTML = dis[0];
    menuHeader.innerText = menuHeaderText[0];
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
s = 0;
/*
previousButton.addEventListener('click', () => x = 1); 
nextButton.addEventListener('click', () => x = 1);

previousButton.addEventListener('click', () => advance(-1, vegeterian.menuHeaderText, vegeterian.headerTitles, vegeterian.prices, vegeterian.headerDescriptions, vegeterian.dis, vegeterian.imageSource));
previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
nextButton.addEventListener('click', () => advance(1, vegeterian.menuHeaderText, vegeterian.headerTitles, vegeterian.prices, vegeterian.headerDescriptions, vegeterian.dis, vegeterian.imageSource));
nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

advance(0, vegeterian.menuHeaderText, vegeterian.headerTitles, vegeterian.prices, vegeterian.headerDescriptions, vegeterian.dis, vegeterian.imageSource);  
*/
function vegetarian() {
   
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);
    
    previousButton.addEventListener('click', () => advance(-1, vegeterian.menuHeaderText, vegeterian.headerTitles, vegeterian.prices, vegeterian.headerDescriptions, vegeterian.dis, vegeterian.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, vegeterian.menuHeaderText, vegeterian.headerTitles, vegeterian.prices, vegeterian.headerDescriptions, vegeterian.dis, vegeterian.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    console.log("Tippy");
    advance(0, vegeterian.menuHeaderText, vegeterian.headerTitles, vegeterian.prices, vegeterian.headerDescriptions, vegeterian.dis, vegeterian.imageSource);   
}
function appetizers() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, appetizersClass.menuHeaderText, appetizersClass.headerTitles, appetizersClass.prices, appetizersClass.headerDescriptions, appetizersClass.dis, appetizersClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, appetizersClass.menuHeaderText, appetizersClass.headerTitles, appetizersClass.prices, appetizersClass.headerDescriptions, appetizersClass.dis, appetizersClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

    advance(0, appetizersClass.menuHeaderText, appetizersClass.headerTitles, appetizersClass.prices, appetizersClass.headerDescriptions, appetizersClass.dis, appetizersClass.imageSource);  
}
function nachos() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;
    
    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, nachosClass.menuHeaderText, nachosClass.headerTitles, nachosClass.prices, nachosClass.headerDescriptions, nachosClass.dis, nachosClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, nachosClass.menuHeaderText, nachosClass.headerTitles, nachosClass.prices, nachosClass.headerDescriptions, nachosClass.dis, nachosClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

    advance(0, nachosClass.menuHeaderText, nachosClass.headerTitles, nachosClass.prices, nachosClass.headerDescriptions, nachosClass.dis, nachosClass.imageSource);   
}
function salads() {
   var x = 1;

   document.getElementById('output-area').innerHTML = x;

   plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
   minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

   previousButton.addEventListener('click', () => x = 1); 
   nextButton.addEventListener('click', () => x = 1);

   previousButton.addEventListener('click', () => advance(-1, saladsClass.menuHeaderText, saladsClass.headerTitles, saladsClass.prices, saladsClass.headerDescriptions, saladsClass.dis, saladsClass.imageSource));
   previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
   nextButton.addEventListener('click', () => advance(1, saladsClass.menuHeaderText, saladsClass.headerTitles, saladsClass.prices, saladsClass.headerDescriptions, saladsClass.dis, saladsClass.imageSource));
   nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

   advance(0, saladsClass.menuHeaderText, saladsClass.headerTitles, saladsClass.prices, saladsClass.headerDescriptions, saladsClass.dis, saladsClass.imageSource);   
}
function tacos() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);
 
    previousButton.addEventListener('click', () => advance(-1, tacosClass.menuHeaderText, tacosClass.headerTitles, tacosClass.prices, tacosClass.headerDescriptions, tacosClass.dis, tacosClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, tacosClass.menuHeaderText, tacosClass.headerTitles, tacosClass.prices, tacosClass.headerDescriptions, tacosClass.dis, tacosClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

    advance(0, tacosClass.menuHeaderText, tacosClass.headerTitles, tacosClass.prices, tacosClass.headerDescriptions, tacosClass.dis, tacosClass.imageSource); 
}
function burrito() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, burritoClass.menuHeaderText, burritoClass.headerTitles, burritoClass.prices, burritoClass.headerDescriptions, burritoClass.dis, burritoClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, burritoClass.menuHeaderText, burritoClass.headerTitles, burritoClass.prices, burritoClass.headerDescriptions, burritoClass.dis, burritoClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

    advance(0, burritoClass.menuHeaderText, burritoClass.headerTitles, burritoClass.prices, burritoClass.headerDescriptions, burritoClass.dis, burritoClass.imageSource);  
}
/** 
 * Note to self, maybe add a "add flour tortilla" option? We'll see 
 */
function enchiladas() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, enchiladaClass.menuHeaderText, enchiladaClass.headerTitles, enchiladaClass.prices, enchiladaClass.headerDescriptions, enchiladaClass.dis, enchiladaClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, enchiladaClass.menuHeaderText, enchiladaClass.headerTitles, enchiladaClass.prices, enchiladaClass.headerDescriptions, enchiladaClass.dis, enchiladaClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    advance(0, enchiladaClass.menuHeaderText, enchiladaClass.headerTitles, enchiladaClass.prices, enchiladaClass.headerDescriptions, enchiladaClass.dis, enchiladaClass.imageSource); 
}
/**
 * Note to self, add mushrooms option, we'll see.
 */
function quesadillas() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, quesadillasClass.menuHeaderText, quesadillasClass.headerTitles, quesadillasClass.prices, quesadillasClass.headerDescriptions, quesadillasClass.dis, quesadillasClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, quesadillasClass.menuHeaderText, quesadillasClass.headerTitles, quesadillasClass.prices, quesadillasClass.headerDescriptions, quesadillasClass.dis, quesadillasClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    advance(0, quesadillasClass.menuHeaderText, quesadillasClass.headerTitles, quesadillasClass.prices, quesadillasClass.headerDescriptions, quesadillasClass.dis, quesadillasClass.imageSource); 
}
function seafood() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, seafoodClass.menuHeaderText, seafoodClass.headerTitles, seafoodClass.prices, seafoodClass.headerDescriptions, seafoodClass.dis, seafoodClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, seafoodClass.menuHeaderText, seafoodClass.headerTitles, seafoodClass.prices, seafoodClass.headerDescriptions, seafoodClass.dis, seafoodClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);

    advance(0, seafoodClass.menuHeaderText, seafoodClass.headerTitles, seafoodClass.prices, seafoodClass.headerDescriptions, seafoodClass.dis, seafoodClass.imageSource);  
}
/**
 * Note to self
 * If there's time, we'll add a feature to add an additional side for $6 . 
 */
function fajitas() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, fajitasClass.menuHeaderText, fajitasClass.headerTitles, fajitasClass.prices, fajitasClass.headerDescriptions, fajitasClass.dis, fajitasClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, fajitasClass.menuHeaderText, fajitasClass.headerTitles, fajitasClass.prices, fajitasClass.headerDescriptions, fajitasClass.dis, fajitasClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    advance(0, fajitasClass.menuHeaderText, fajitasClass.headerTitles, fajitasClass.prices, fajitasClass.headerDescriptions, fajitasClass.dis, fajitasClass.imageSource); 
}
function desserts(){
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, dessertsClass.menuHeaderText, dessertsClass.headerTitles, dessertsClass.prices, dessertsClass.headerDescriptions, dessertsClass.dis, dessertsClass.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, dessertsClass.menuHeaderText, dessertsClass.headerTitles, dessertsClass.prices, dessertsClass.headerDescriptions, dessertsClass.dis, dessertsClass.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    advance(0, dessertsClass.menuHeaderText, dessertsClass.headerTitles, dessertsClass.prices, dessertsClass.headerDescriptions, dessertsClass.dis, dessertsClass.imageSource); 
}
function nonAlcoholic() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, nonAlcoholics.menuHeaderText, nonAlcoholics.headerTitles, nonAlcoholics.prices, nonAlcoholics.headerDescriptions, nonAlcoholics.dis, nonAlcoholics.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, nonAlcoholics.menuHeaderText, nonAlcoholics.headerTitles, nonAlcoholics.prices, nonAlcoholics.headerDescriptions, nonAlcoholics.dis, nonAlcoholics.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    advance(0, nonAlcoholics.menuHeaderText, nonAlcoholics.headerTitles, nonAlcoholics.prices, nonAlcoholics.headerDescriptions, nonAlcoholics.dis, nonAlcoholics.imageSource);  
}
function alcoholic() {
    var x = 1;

    document.getElementById('output-area').innerHTML = x;

    plusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = ++x);
    minusButton.addEventListener('click', () => document.getElementById('output-area').innerHTML = --x);

    previousButton.addEventListener('click', () => x = 1); 
    nextButton.addEventListener('click', () => x = 1);

    previousButton.addEventListener('click', () => advance(-1, alcoholics.menuHeaderText, alcoholics.headerTitles, alcoholics.prices, alcoholics.headerDescriptions, alcoholics.dis, alcoholics.imageSource));
    previousButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    nextButton.addEventListener('click', () => advance(1, alcoholics.menuHeaderText, alcoholics.headerTitles, alcoholics.prices, alcoholics.headerDescriptions, alcoholics.dis, alcoholics.imageSource));
    nextButton.addEventListener('click', () =>  document.getElementById('output-area').innerHTML = x);
    advance(0, alcoholics.menuHeaderText, alcoholics.headerTitles, alcoholics.prices, alcoholics.headerDescriptions, alcoholics.dis, alcoholics.imageSource);   
}