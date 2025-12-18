// Access HTML elements
const alertButton = document.getElementById('alertButton');
const openWindowButton = document.getElementById('openWindowButton');
const navigateBackButton = document.getElementById('navigateBackButton');
const changeURLButton = document.getElementById('changeURLButton');

// Attach event listeners
alertButton.addEventListener('click', () =>{
    window.alert('Hello, this is an alert!');
});

openWindowButton.addEventListener('click', () =>{
    window.open('https://example.com', '_blank');
});

navigateBackButton.addEventListener('click', () =>{
    history.back(); // Naviagtes back one page in the user's browsing history
});

changeURLButton.addEventListener('click', () =>{
    location.href = 'https://example.com';  // Redirects the user to a new URL.
});