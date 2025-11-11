const featureContainer = document.getElementById('featureContainer')
const featureIndicator = document.getElementById('featureIndicator')

var index = 0

Array.from(featureContainer.children).forEach(featureElement => {

    featureElement.id = `feature${index}`

    const indicator = document.createElement("div")
    indicator.classList.add("indicatorDot")
    if (index == 0) {
        indicator.classList.add("active")
    }
    indicator.id = `indicator${index}`
    featureIndicator.appendChild(indicator)

    index++
});

featureContainer.scrollLeft = 0


function loop() {
    var i = 0
    setInterval(function() {
        document.getElementById(`indicator${i}`).classList.remove("active")

        i = (i + 1) % 3

        const featureElement = document.getElementById(`feature${i}`)
        document.getElementById(`indicator${i}`).classList.add("active")

        featureElement.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            container: "nearest",
            behavior: "smooth"
        })
    }, 5000);
}

loop()
