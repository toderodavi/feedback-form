export function moveBtn() {
  const moveButton = document.querySelector('.move-btn')
  moveButton.textContent = 'up'
  const positionOverride = document.createElement('style')
  const disclaimerP = document.createElement('p')
  positionOverride.id = 'positionOverride'
  moveButton.addEventListener('click', () => {
    if (positionOverride.textContent === '* { position: absolute; top: 0; }') {
      moveButton.textContent = 'reset'
      positionOverride.textContent = '* { position: absolute; bottom: 0; }'
    } else {
      if (positionOverride.textContent === '* { position: absolute; bottom: 0; }') {
        positionOverride.remove()
      } else {
        moveButton.textContent = 'down'
        positionOverride.textContent = '* { position: absolute; top: 0; }'
        document.head.append(positionOverride)
      }
    }
    if (!document.getElementById('positionOverride')) {
      disclaimerP.textContent = "So, I don't know enough of DOM to make this work again now"
      disclaimerP.className = 'disclaimer-p'
      document.body.append(disclaimerP)
    }
  })
}
