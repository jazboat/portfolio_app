var colorFontPicker = document.querySelector('.color-font-picker');
var headingColorLeft = document.querySelector('.heading-color-left');
var paragraphColorLeft = document.querySelector('.paragraph-color-left');
var backgroundColorLeft = document.querySelector('.background-color-left');
var headingColorRight = document.querySelector('.heading-color-right');
var paragraphColorRight = document.querySelector('.paragraph-color-right');
var backgroundColorRight = document.querySelector('.background-color-right');


var leftHeadings = document.querySelectorAll('.left-heading');
var leftBackground = document.querySelector('.left-column')
var rightBackground = document.querySelector('.right-column')

// live dom from input
headingColorLeft.addEventListener("input", handleColorChange, false)
headingColorRight.addEventListener("input", handleColorChange, false)
paragraphColorLeft.addEventListener("input", handleColorChange, false)
paragraphColorRight.addEventListener("input", handleColorChange, false)
backgroundColorLeft.addEventListener("input", handleColorChange, false)
backgroundColorRight.addEventListener("input", handleColorChange, false)

// db from change
headingColorLeft.addEventListener("change", function(event) {
    console.log(event.target.value);
})

headingColorRight.addEventListener("change", function(event) {
    console.log(event.target.value);
})

paragraphColorLeft.addEventListener("change", function(event) {
    console.log(event.target.value);
})

paragraphColorRight.addEventListener("change", function(event) {
    console.log(event.target.value);
})

backgroundColorLeft.addEventListener("change", function(event) {
    let reqObj = {
        background_color_left: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/left-background/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.bgColorLeft;
            backgroundColorLeft.style.backgroundColor = responseColor;
            console.log('db color response: ', responseColor);
        })
})

backgroundColorRight.addEventListener("change", function(event) {
    let reqObj = {
        background_color_right: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/right-background/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.bgColorRight;
            backgroundColorRight.style.backgroundColor = responseColor;
            console.log('db color response: ', responseColor);
        })
    
})

function changeClassColor(className, event) {
    let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.style.color = event.target.value;
        }
}

function handleColorChange(event) {

    if (event.target.className === 'heading-color-left color-picker') {

        leftHeadings.forEach(heading => {
            heading.style.color = event.target.value;
        })

    } else if (event.target.className === 'paragraph-color-left color-picker') {

        changeClassColor("left-para", event);

    } else if (event.target.className === 'background-color-left color-picker') {

        leftBackground.style.backgroundColor = event.target.value;

        
    } else if (event.target.className === 'heading-color-right color-picker') {

        changeClassColor("right-heading", event)
        
    } else if (event.target.className === 'paragraph-color-right color-picker') {

        changeClassColor("right-para", event);
        
    } else if (event.target.className === 'background-color-right color-picker') {
        
        rightBackground.style.backgroundColor = event.target.value;

    }
}