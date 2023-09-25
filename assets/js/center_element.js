// Get the element
function center(id) {
    const element = document.getElementById(id);

    // Get the width and height of the element
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
    
    // Calculate the center of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const centerX = (windowWidth - elementWidth) / 2;
    const centerY = (windowHeight - elementHeight) / 2;
    
    // Set the element's position to be centered
    element.style.left = `${centerX}px`;
    element.style.top = `${centerY}px`;
}


center('cheerpjDisplay')