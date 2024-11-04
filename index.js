function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('#home');
});

// link2.addEventListener('click', (e) => {
//     e.preventDefault();
//     scrollToElement('#about');
// });

link3.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('#services');
});

link4.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('#projects');
});



