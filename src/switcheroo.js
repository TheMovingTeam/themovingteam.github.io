console.log("Hai")

const vcmd = document.getElementById("valueCardsMd")
const vc = document.getElementById("valueCards")

vc.replaceChildren(...vcmd.children)

vcmd.remove()

