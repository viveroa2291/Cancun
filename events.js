function toggleNav() {    
    let elements = document.getElementsByClassName('top-nav');
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('show');
    }
}