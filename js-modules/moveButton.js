export function moveButton() {
  const moveButton = document.querySelector('.move-btn')
  const styleOverride = document.createElement('style')
  const disclaimerParagraph = document.createElement('p')

  moveButton.textContent = 'up'
  styleOverride.id = 'styleOverride'

  moveButton.addEventListener('click', () => {
    if (styleOverride.textContent === '* { position: absolute; top: 0; }') {
      moveButton.textContent = 'reset'
      styleOverride.textContent = '* { position: absolute; bottom: 0; }'
    } else {
      if (styleOverride.textContent === '* { position: absolute; bottom: 0; }') {
        styleOverride.remove()
      } else {
        moveButton.textContent = 'down'
        styleOverride.textContent = '* { position: absolute; top: 0; }'
        document.head.append(styleOverride)
      }
    }
    if (!document.getElementById('styleOverride')) {
      disclaimerParagraph.textContent =
        "So, I don't know enough of DOM to make this work again, I accept pull requests at: https://github.com/toderodavi/feedback-form"
      disclaimerParagraph.className = 'disclaimer-paragraph'
      document.body.append(disclaimerParagraph)
    }
  })
}
