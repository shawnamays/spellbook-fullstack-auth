// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");





// TRASH DELETE LOGIC---------------------------------------------------




function deleted(id){
  
 
  fetch('/spells', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: id,
    
    
    })
  }).then(function (response) {
    window.location.reload()
  })


}


function edit(id){
  let spellName = prompt("what is the new name of your spell?")
  let ritual = prompt("what is your new ritual?")
 
  fetch('/spells', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: id,
      spellName: spellName,
      ritual: ritual
    
    })
  }).then(function (response) {
    window.location.reload()
  })



}

