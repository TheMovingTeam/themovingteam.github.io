
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
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    document.documentElement.dataset.scroll = scrollTop;

    if (document.querySelector(".logoContainer") != undefined) {
        var factor = 0
        if (window.innerWidth > 768) {
            factor = 4
        } else {
            factor = 6
        }

        const scrolled = Math.min(Math.max((scrollTop / ((scrollHeight - clientHeight) / factor)) - 1, 0), 1);

        const scale = Math.min(0.8 * scrolled, 2);
        const offset = Math.max(40 - (40 * scrolled), 10);
        const blur = Math.max(40 - (60 * scrolled), 0)

        document.querySelector(".logoContainer").style.scale = `${scale}`;
        document.querySelector(".logoContainer").style.translate = `0 ${offset}%`;
        document.querySelector(".logoContainer").style.setProperty("--blur", `${blur}px`);
    }
}
// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
// Update scroll position for first time
storeScroll();
