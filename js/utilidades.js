function createElement(tag){
    element = document.createElement(tag)
    element.style.color= "red"
    return element

}





function createElementText(tag, text) {
    element = createElement(tag)
    element.textContent = text
    document.body.appendChild(element)
}


function createElementImg(src, alt) {
    img= createElement('img')
    img.src = src
    img.alt = alt
    document.body.appendChild(img)


}