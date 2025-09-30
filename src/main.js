
function debounce(fn) {
    let frame;
    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};

function storeScroll() {
    document.documentElement.dataset.scroll = window.scrollY;
}
// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
// Update scroll position for first time
storeScroll();
