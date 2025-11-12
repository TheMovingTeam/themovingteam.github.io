const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

titles.forEach(element => {
    const link = document.createElement("a")
    link.text = "#"
    link.href = navigator.clipboard.writeText(document.URL.append(element.id))

    link.classList.add("linkTag")
    
    element.after(link)
})
