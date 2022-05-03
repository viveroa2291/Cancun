function toggleNav() {
    let elements = document.getElementsByClassName('top-nav');
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('show');
    }
}

    const previousButton = document.getElementById('previous-button'); // The back button
    const nextButton = document.getElementById('next-button'); // The next button
    const headerDiv = document.getElementById('header'); // header title
    const images = document.getElementById('images');
    const descriptionDiv = document.getElementById('descriptionBody');

    const headerTitles = ["Welcome", "About Us", "Contact Us", "Upcoming Events"];
    const headerDescritpions = ["Hello, this is the home page. Be sure to check out our other pages.", 
    "In the about page, we dive into the history of Cancun Mexican Grill and what we serve in our menu.",
    "This is a selfie of me at the Alamo in San Antonio Texas.", 
    "Be sure to check out our upcoming events and what is happening here or on our Facebook page."];
    const imageSource = ["images/homePage.png", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/cinco.png", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
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

