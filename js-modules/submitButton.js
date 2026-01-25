export function submitButton() {
  const submitButton = document.querySelector('.submit-button')
  const newTextAreaDialogue = document.createElement('p')
  let count = 0

  function submitForm(randomX, randomY) {
    // For the future me:
    // The element is being appended before receiving classes and styling
    // Because you can't get the offset of a still not inserted DOM Element.
    // Also, there are probably better ways of doing this - like using translateY(-50%)
    // And safeproofing cases where the dialogue may go outside the screen
    const textAreaDialogue = document.querySelector('.feedback-dialogue')
    textAreaDialogue.remove()
    document.body.append(newTextAreaDialogue)
    newTextAreaDialogue.classList.add('feedback-dialogue')
    newTextAreaDialogue.classList.add('textarea-holds-button')
    newTextAreaDialogue.textContent = "I'm holding! Click it! (。;>︿<)_θ"
    newTextAreaDialogue.style.top = `${randomY - newTextAreaDialogue.offsetHeight * -0.05}px`
    newTextAreaDialogue.style.left = `${randomX - newTextAreaDialogue.offsetWidth}px`
    submitButton.addEventListener('click', blackScreen)
  }

  function randomlyMoveButton() {
    const width = window.innerWidth - submitButton.offsetWidth + 50
    const height = window.innerHeight - submitButton.offsetHeight + 50
    let randomX = Math.floor(Math.random() * width) + 1
    let randomY = Math.floor(Math.random() * height) + 1
    count++

    if (count >= 7) {
      submitForm(randomX, randomY)
    }

    submitButton.style.position = 'fixed'
    submitButton.style.width = `${15 - 0.8 * count}rem`
    submitButton.style.height = `${6 - 0.6 * count}rem`
    submitButton.style.top = `${randomY}px`
    submitButton.style.left = `${randomX}px`
  }

  function blackScreen() {
    const blackOverlay = document.createElement('div')
    const finalMessage01 = document.createElement('p')
    const finalMessage02 = document.createElement('p')
    blackOverlay.className = 'black-overlay'
    finalMessage01.className = 'feedback-dialogue'
    finalMessage01.classList.add('final-message-01')
    finalMessage02.className = 'final-message-02'
    finalMessage01.textContent = '(☆-ｖ-) would never let you down!'
    finalMessage02.textContent = 'The form will never get through tho'

    document.body.append(blackOverlay)
    blackOverlay.append(finalMessage01)
    blackOverlay.append(finalMessage02)
  }

  submitButton.addEventListener('click', randomlyMoveButton)
}
