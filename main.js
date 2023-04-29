mainDiv = document.querySelector('#MainContent')
sortingHatDiv = document.querySelector('#sortingHat')
navBar = document.querySelector("#navBar")

function startApp() {
  title = document.querySelector('#Title')
  title.innerHTML = "<div>Welcome to Hogwarts!</div>"
  displaySortingHat()
}

function displaySortingHat() {
  sortingHatDiv.innerHTML= `<div><div>Click on me to get started</div>
  <a href=""><img src="https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/the_sorting_hat_main_npc_hogwarts_legacy_wiki_375px.png" alt="Sorting Hat" width="250" height="300"/></a>
  </div>`

}

document.querySelector('#sortingHat').addEventListener('click', function(e){
  e.preventDefault()
  DisplayMainPage() 
})

function DisplayMainPage() {
  sortingHatDiv.innerHTML = ""
  navBar.innerHTML = `
  <button></button>
  <button></button>
  <button></button>
  `


}
startApp() 
