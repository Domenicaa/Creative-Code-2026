// make the html elements global bc we might want to manipulate them
let headerElement
let slider
let inputText
let dropdown

function setup() {
  createCanvas(400, 400);
  headerElement = createElement('h2', 'hi this is an h2')
  headerElement.position(0, 0)
  headerElement.html ('i have change the content now')
  
  //value= starting value
  //step= if you want it to snap to a value
   slider = createSlider(0, width, width/2, 100)
  
  //createInput([value])
  inputText = createInput('this is some text')
  inputText.position(10, 350)
  
  
  dropdown = createSelect()
  dropdown.option("sky blue", "skyblue")
  dropdown.option("pink")
  
  
  
}


function draw() {
  background(dropdown.selected());
  
  // print(slider.value())
  text(inputText.value(), slider.value(), height/2)
}