console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then( resp => resp.json())
  .then(data => console.log(data))
})
