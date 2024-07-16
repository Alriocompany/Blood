// JavaScript for additional functionalities

// Function to start the ticker animation
function startTicker() {
    const ticker = document.querySelector('.ticker-content');
    const tickerWidth = ticker.scrollWidth;
    const containerWidth = ticker.parentElement.clientWidth;

    let startPosition = containerWidth;

    function scrollTicker() {
        if (startPosition <= -tickerWidth) {
            startPosition = containerWidth;
        }
        ticker.style.transform = translateX({$startPositionpx});
        startPosition -= 1;
        requestAnimationFrame(scrollTicker);
    }

    scrollTicker();
}

// Start the ticker when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startTicker();
});
// JavaScript for additional functionalities

// This script can be extended to dynamically load content or add interactions
document.addEventListener('DOMContentLoaded', () => {
    // Example function to show alert when clicking on links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Link clicked: ' + link.textContent);
        });
    });
});
// JavaScript for additional functionalities

// This script can be extended to dynamically load content or add interactions
document.addEventListener('DOMContentLoaded', () => {
    // Example function to show alert when clicking on calendar items
    const items = document.querySelectorAll('.calendar-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            alert('Item clicked: ' + item.textContent);
        });
    });
});