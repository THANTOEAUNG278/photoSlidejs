const imgOne = document.getElementById('img-one');
const imgTwo = document.getElementById('img-two')
const imgFour = document.getElementById('img-four')
const leftIcon = document.getElementById('left-icon')
const rightIcon = document.getElementById('right-icon')

imgOne.style.display = 'block'

rightIcon.addEventListener('click', () => {
  if (imgOne.style.display === 'block') {
    imgOne.style.display = 'none'
    imgTwo.style.display = 'block'
  } else if (imgTwo.style.display === 'block') {
    imgTwo.style.display = 'none'
    imgFour.style.display = 'block'
  } else if (imgFour.style.display === 'block') {
    imgFour.style.display = 'none'
    imgOne.style.display = 'block'
  }
})

leftIcon.addEventListener('click', () => {
  if (imgOne.style.display === 'block') {
    imgOne.style.display = 'none'
    imgTwo.style.display = 'block'
  } else if (imgTwo.style.display === 'block') {
    imgTwo.style.display = 'none'
    imgFour.style.display = 'block'
  } else if (imgFour.style.display === 'block') {
    imgFour.style.display = 'none'
    imgOne.style.display = 'block'
  }
})
