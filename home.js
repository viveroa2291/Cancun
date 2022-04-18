const previousButton = document.getElementById('previous-button'); // The back button
const nextButton = document.getElementById('next-button'); // The next button
const headerDiv = document.getElementById('header'); // header title
const images = document.getElementById('images');
const descriptionDiv = document.getElementById('descriptionBody');

const headerTitles = ["Welcome", "About Us", "Contact Us", "Upcoming Events"];
const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
let s = 0;

function advance(delta) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
    descriptionDiv.innerHTML = headerDescritpions[s];
    headerDiv.innerHTML = headerTitles[s];
// headerDiv.setAttribute("href", linkTitles[s]);
    images.src = imageSource[s];
}
previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0); 