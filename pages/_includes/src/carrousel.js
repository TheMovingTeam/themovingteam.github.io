const featureContainer = document.getElementById('featureContainer')
const featureIndicator = document.getElementById('featureIndicator')

function main() {
    var index = 0

    const entries = document.getElementsByClassName('featureEntry')
    Array.from(entries).forEach(featureElement => {
        featureElement.id = `feature${index}`
        index++
    })

    index = 0

    Array.from(featureContainer.children).forEach(() => {

        const indicator = document.createElement("div")

        indicator.classList.add("indicatorDot")
        if (index == 0) {
            indicator.classList.add("active")
        }
        indicator.id = `indicator${index}`
        indicator.ariaRoleDescription = "button"

        indicator.addEventListener("click", () => {
            swapTo(indicator.id.replace("indicator", ""))
        })

        featureIndicator.appendChild(indicator)

        index++
    });

    featureContainer.scrollLeft = 0

    loop()
}

function loop() {
    var i = 0
    setInterval(function() {
        if (isElementInViewport(featureContainer)) {
            i = (i + 1) % 3
            swapTo(i)
        }
    }, 5000);
}


function swapTo(i) {
    Array.from(featureIndicator.children).forEach(element => {
        element.classList.remove("active")
    })

    const featureElement = document.getElementById(`feature${i}`)
    document.getElementById(`indicator${i}`).classList.add("active")

    featureElement.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        container: "nearest",
        behavior: "smooth"
    })
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

main()
