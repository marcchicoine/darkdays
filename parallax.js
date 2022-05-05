const sections = document.querySelectorAll("section")
//to find the pixel height use doc.quSAll. offsetTop in console
//for height of object same thing but object.offsetHeight
const addMovement = function () {
  //how far from top of page we are
  const topViewport = window.pageYOffset
 const midViewport = topViewport + ( 0.5 * window.innerHeight) 
  const bodyTag = document.querySelector("body")
  //middle of each section
  //first section=0,second = 1
  // (section, index) => {}
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight /2)
    
    //how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection
    
    //pick the tags to parallax
    const image = section.querySelector("img")
    const content = section.querySelector("div") 
    //weight down this distance
    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2
    //for every even section, rotate opposite direction
    //is index divisible by two, is index's remainder zero? 
    //the modulo operator 5 % 2 = 1, 4 % 2 = 0
    if (index % 2 == 1){
      rotation = rotation * -1
    }
    //apply some parallax
    image.style.transform = `rotate(${distanceToSection/ 60}deg)`
    content.style.top = `${contentDist}px`
    content.style.transform = `rotate(${distanceToSection/ -60}deg)`
   

  })
  
}

addMovement()

document.addEventListener("scroll", function(){
  addMovement()
})

window.addEventListener("resize", function (){
  addMovement()
})


