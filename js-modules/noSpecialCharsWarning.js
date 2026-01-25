export function noSpecialCharsWarning() {
  const emailInput = document.getElementById('emailInput')
  const warningParagraph = document.createElement('p')
  const parentElement = document.getElementById('emailInputDiv')

  parentElement.style.position = 'relative'
  warningParagraph.className = 'warning-paragraph'
  warningParagraph.textContent = "Special caracter '@' not allowed."

  emailInput.addEventListener('input', () => {
    if (!emailInput.value.includes('@')) {
      if (warningParagraph) {
        warningParagraph.remove()
        return
      }
      return
    } else {
      parentElement.append(warningParagraph)
    }
  })
}
