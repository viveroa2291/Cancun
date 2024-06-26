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
["menuImage/vegetarian/vegetarianFajitas.png", "menuImage/vegetarian/burritoDeFrijole.png", "menuImage/vegetarian/burritoVegetariano.jpeg"]);

const appetizersClass = new MenuSelection(["Appetizers"],
["Queso Fundido", "Mozzarella Sticks", "Cheese Fries", "Chicken Tenders", "Cancun Sampler", "Ceviche De Camaron"],
[9.99, 7.99, 6.99, 8.99, 7.99, 13.99,12.99],
["Chorize (Mexican sausages) with cheese sauce. <br> Served with flour tortillas.", "Served with fries.", " ", "Served with fries", 
    "Refried bean dip with cream cheese.", 
    "A combo of cheese sticks, chicken tenders, chicken quesadilla & queso fundido. <br> Served with lettuce and guacamole.",
    "Fresh shrimp chopped and marinated with lime, tomato, red onions, cilantro, and diced jalapenos. <br> Served with advocado slices, chips and crackers."],
[""],
["menuImage/appetizers/quesoFundido.jpeg", "menuImage/appetizers/mozzarellaSticks.jpeg", "menuImage/appetizers/cheeseFries.jpeg", "menuImage/appetizers/chickenTenders.jpeg", "menuImage/appetizers/cancunSampler.png", "menuImage/appetizers/cevicheDeCamaron.jpeg"]);

const nachosClass = new MenuSelection(["Nachos"],
["Nachos De Mesa", "Nachos Fajitas", "Nachos With Cheese", "Nachos Supreme"],
[12.99, 12.99, 8.99, 11.99, 10.99],
["Cheese nachos with beef, chicken, and beans. <br> Topped with lettuce and shredded cheese.",
    "Your choice of Grilled Chicken or Steak with sauteed onions and bell peppers.", " ", 
    "Your choice of ground Beef or Chicken, topped with lettuce.", " "],
["* All nachos topped with shredded cheese and cheese sauce. * <hr width='25%'>"],
["menuImage/nachos/nachosDeMesa.png", "menuImage/nachos/nachoFajitas.jpeg", "menuImage/nachos/nachosWithCheese.jpeg", "menuImage/nachos/nachosSupreme.jpeg"]
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
["menuImage/salads/tacoSalad.jpeg", "menuImage/salads/grilledShrimpSalad.jpeg", "menuImage/salads/chickenSalad.png", "menuImage/salads/mahiSalad.jpeg", "menuImage/salads/tacoSaladFajita.jpeg", "images/bucs.jpeg"] 
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
["menuImage/tacos/carneAsadaTacos.jpeg", "menuImage/tacos/carnitas-tacos.jpeg", "menuImage/tacos/chorizo-tacos.jpeg", "menuImage/tacos/al-pastor-tacos.jpeg", "menuImage/tacos/pollo-asado-tacos.jpeg", "menuImage/tacos/camaron-tacos.jpeg", "menuImage/tacos/fish-tacos.jpeg"] 
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
["menuImage/burritos/burritos-norteños.jpeg", "menuImage/burritos/don-burrito.png", "menuImage/burritos/carnitas-burrito.jpeg", "menuImage/burritos/deshebrada-burrito.jpg", "menuImage/burritos/burrito-mexicanos.jpeg", "menuImage/burritos/burrito-cancun.jpeg", "menuImage/burritos/burrito-de-la-mesa.jpeg", "menuImage/burritos/burrito-bowl.jpeg"]
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
["menuImage/enchiladas/enchiladas-rojas.jpeg", "menuImage/enchiladas/enchiladas-verdes.jpeg", "menuImage/enchiladas/enchiladas-rancheras.jpeg", "menuImage/enchiladas/enchiladas-de-la-mesa.jpeg", "menuImage/enchiladas/enchiladas-de-pollo.jpeg", "menuImage/enchiladas/enchiladas-mexicana.jpeg"]
);

const quesadillasClass = new MenuSelection(["Quesadillas"],
["Cheese Quesadilla", "Chicken or Beef Quesadilla", "Fajita Quesadilla"],
[9.99, 10.99, 12.99],
[" ", "", "Your choice of Grilled Chicken or Steak with sauteed onions, tomatoes, and bell peppers."],
["* Quesadillas served with lettuce, sour cream, and tomatoes. * <hr width='25%'>"],
["menuImage/quesadillas/cheese-quesadilla.jpeg", "menuImage/quesadillas/chicken-quesadilla.jpeg", "menuImage/quesadillas/fajita-quesadilla.jpeg"]
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
["menuImage/seafood/seafoodVallarta.jpeg", "menuImage/seafood/ceviche-de-camarones.jpeg", "menuImage/seafood/Mazatlan.jpeg", "menuImage/seafood/enchiladas-acapulco.jpeg", "menuImage/seafood/coctel-de-camaron.jpeg", "menuImage/seafood/quesadilla-de-camaron.jpeg", "menuImage/seafood/enchiladas-cancun.jpeg", "menuImage/seafood/camarones-la-diabla.jpeg", "menuImage/seafood/los-cabos-shrimp.jpeg", "menuImage/seafood/camarones-al-chipotle.jpeg", "menuImage/seafood/shrimp-relleno.jpeg", "menuImage/seafood/mojarra-frita.jpeg", "menuImage/seafood/cozumel.jpeg"]
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
["menuImage/fajitas/fajitas-rancheras.jpeg", "menuImage/fajitas/fajitas-skillet.jpeg", "menuImage/fajitas/fajitas-platter.jpeg", "menuImage/fajitas/fajitas-shrimp-skillet.jpeg", "menuImage/fajitas/fajitas-jalisco.jpeg", "menuImage/fajitas/fajitas-de-carnitas.jpeg", "menuImage/fajitas/fajitas-tulum.jpeg"]
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
["menuImage/dessert/chocolate-cake.jpeg", "menuImage/dessert/carrot-cake.jpeg", "menuImage/dessert/cheese-cake.jpeg", "menuImage/dessert/cheese-cake-chimichanga.jpeg", "menuImage/dessert/flan.jpeg", "menuImage/dessert/fried-ice-cream.jpeg", "menuImage/dessert/ice-cream.jpeg", "menuImage/dessert/sundae.jpeg"]
);

const nonAlcoholics = new MenuSelection(["Non-Alcholic Drinks"],
["Pepsi", "Diet Pepsi", "Pepsi Wild Cherry", "Mountain Dew", "Diet Mountain Dew", "Root Beer", "Dr. Pepper", "Sierra Mist", "Tropicana Pink Lemonade"],
[2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 2.99],
[" ", "", "", "", "", "", "", "", ""],
[""],
["menuImage/non-alcoholic/pepsi.jpg", "menuImage/non-alcoholic/dietPepsi.png", "menuImage/non-alcoholic/pepsi-wild-cherry.jpg", "menuImage/non-alcoholic/mountainDew.jpeg", "menuImage/non-alcoholic/diet-mountainDew.jpeg", "menuImage/non-alcoholic/root-beer.jpg", "menuImage/non-alcoholic/dr-pepper.jpeg", "menuImage/non-alcoholic/sierra-mist.jpeg", "menuImage/non-alcoholic/tropicana-pink-lemonade.jpeg"]
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
["menuImage/alcoholic/daiquiris.jpeg", "menuImage/alcoholic/mojitos.jpeg", "menuImage/alcoholic/pina-colada.jpeg", "menuImage/alcoholic/beers-imported-on-tap.jpeg", "menuImage/alcoholic/beers-imported.jpeg", "menuImage/alcoholic/domestic-imported-beers.jpeg", "menuImage/alcoholic/perfect-margarita.jpeg", "menuImage/alcoholic/house-margarita.jpeg", "menuImage/alcoholic/jalapeno.jpeg", "menuImage/alcoholic/spicy-mango.jpeg", "menuImage/alcoholic/cucumber.jpeg", "menuImage/alcoholic/coronarita.jpeg", "menuImage/alcoholic/tequila-sunrise.jpeg"]
);

var x = 1;
var s = 0;
var currentMenu = null;

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

function updateQuantity(newX) {
    x = newX;
    document.getElementById('output-area').innerHTML = x;
    updatePrice();
}

function updatePrice() {
    if (currentMenu) {
        price.innerHTML = "$ " + (currentMenu.prices[s] * x).toFixed(2); // Fix to 2 decimal places
    }
}

plusButton.addEventListener('click', () => updateQuantity(x + 1));
minusButton.addEventListener('click', () => {
    if (x > 1) updateQuantity(x - 1);
});

function advance(delta) {
    if (currentMenu) {
        s = (s + delta + currentMenu.headerTitles.length) % currentMenu.headerTitles.length;
        descriptionDiv.innerHTML = currentMenu.headerDescriptions[s];
        foodType.innerHTML = currentMenu.headerTitles[s];
        images.src = currentMenu.imageSource[s];
        disclaimer.innerHTML = currentMenu.dis[0];
        menuHeader.innerText = currentMenu.menuHeaderText[0];
        updatePrice();
    }
}

function setupMenu(menu) {
    x = 1;
    s = 0;
    currentMenu = menu;
    document.getElementById('output-area').innerHTML = x;
    advance(0);
}

previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

function showVegetarian() {
    setupMenu(vegeterian);
}
// Vegetarian Default Menu Option
document.addEventListener('DOMContentLoaded', (event) => {
    showVegetarian();
});
function showAppetizers() {
    setupMenu(appetizersClass);
}
function showNachos() {
    setupMenu(nachosClass);
}
function showSalads() {
    setupMenu(saladsClass);
}
function showTacos() {
    setupMenu(tacosClass);
}
function showBurrito() {
    setupMenu(burritoClass);
}
function showEnchiladas() {
    setupMenu(enchiladaClass);
}
function showQuesadillas() {
    setupMenu(quesadillasClass);
}
function showSeafood() {
    setupMenu(seafoodClass);
}
function showFajitas() {
    setupMenu(fajitasClass);
}
function showDesserts() {
    setupMenu(dessertsClass);
}
function showNonAlcoholic() {
    setupMenu(nonAlcoholics);
}
function showAlcoholic() {
    setupMenu(alcoholics);
}
document.querySelector('.menu-nav-bar a[href="#vegetarian"]').addEventListener('click', showVegetarian);
document.querySelector('.menu-nav-bar a[href="#appetizers"]').addEventListener('click', showAppetizers);
document.querySelector('.menu-nav-bar a[href="#nachos"]').addEventListener('click', showNachos);
document.querySelector('.menu-nav-bar a[href="#salads"]').addEventListener('click', showSalads);
document.querySelector('.menu-nav-bar a[href="#tacos"]').addEventListener('click', showTacos);
document.querySelector('.menu-nav-bar a[href="#burrito"]').addEventListener('click', showBurrito);
document.querySelector('.menu-nav-bar a[href="#enchiladas"]').addEventListener('click', showEnchiladas);
document.querySelector('.menu-nav-bar a[href="#quesadillas"]').addEventListener('click', showQuesadillas);
document.querySelector('.menu-nav-bar a[href="#seafood"]').addEventListener('click', showSeafood);
document.querySelector('.menu-nav-bar a[href="#fajitas"]').addEventListener('click', showFajitas);
document.querySelector('.menu-nav-bar a[href="#desserts"]').addEventListener('click', showDesserts);
document.querySelector('.menu-nav-bar a[href="#nonAlcoholic"]').addEventListener('click', showNonAlcoholic);
document.querySelector('.menu-nav-bar a[href="#alcoholic"]').addEventListener('click', showAlcoholic);