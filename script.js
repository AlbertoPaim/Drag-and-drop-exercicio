//GLOBAL DATA 

let areas = {
  a: null,
  b: null,
  c: null
}




// item events

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
  
});

// area events

document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", drop);
});


// neutroArea Events 
document.querySelector('.neutralArea').addEventListener('dragover', overNeutra)
document.querySelector('.neutralArea').addEventListener('dragleave', leaveNeutra)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutra)

// Item functions

function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}
function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

// area Functions

function dragOver(e) {
  if (e.currentTarget.querySelector(".item") === null) {
    e.preventDefault()
    e.currentTarget.classList.add("hover")
  }
  
}

function dragLeave(e) {
   
    e.currentTarget.classList.remove("hover")
}

function drop(e) {
    
    e.currentTarget.classList.remove("hover")
    
    if (e.currentTarget.querySelector(".item") === null) {
      let dragItem = document.querySelector('.item.dragging')
      e.currentTarget.appendChild(dragItem)
      updateAreas()
    }
    
}


// neutraArea functions 

function overNeutra(e){
  e.preventDefault()
  e.currentTarget.classList.add("hover")
}

function leaveNeutra(e){
  e.currentTarget.classList.remove("hover")
}

function dropNeutra(e){
  e.currentTarget.classList.remove("hover")
  let dragItem = document.querySelector('.item.dragging')
  e.currentTarget.appendChild(dragItem)
  updateAreas()
}


//logic functions 

function updateAreas() {
  

document.querySelectorAll('.area').forEach(area =>{
let name = area.getAttribute('data-name')
if (area.querySelector('.item') !== null) {
  areas[name] = area.querySelector('.item').innerHTML
} else{
  areas[name] = null
}
})

if (areas.a == 1 && areas.b == 2 && areas.c == 3  ) {
  document.querySelector('.areas').classList.remove("correct")
  document.querySelector('.areas').classList.add("correct")
} else {

  document.querySelector('.areas').classList.remove("correct")
}

}
