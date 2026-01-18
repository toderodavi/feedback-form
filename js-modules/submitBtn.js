export function submitBtn() {
  const submitButton = document.querySelector('.submit-button')
  const newTextAreaDialogue = document.createElement('p')

  function submitForm() {
    const textAreaDialogue = document.querySelector('.feedback-talk')
    textAreaDialogue.remove()
    newTextAreaDialogue.classList.add('feedback-talk')
    newTextAreaDialogue.classList.add('textarea-holds-button')
    newTextAreaDialogue.textContent = "I'm holding! Click it! (。;>︿<)_θ"
    document.body.append(newTextAreaDialogue)
    setTimeout(() => {
      submitButton.disabled = false
      submitButton.addEventListener('click', blackScreen)
    }, 3000)
  }

  function blackScreen() {
    const blackOverlay = document.createElement('div')
    const finalMessage01 = document.createElement('p')
    const finalMessage02 = document.createElement('p')
    const finalMessage03 = document.createElement('p')
    blackOverlay.className = 'black-overlay'
    finalMessage01.className = 'feedback-talk'
    finalMessage01.classList.add('final-message-01')
    finalMessage02.className = 'final-message-02'
    finalMessage03.className = 'final-message-03'
    finalMessage01.textContent = '(☆-ｖ-) would never let you down!'
    finalMessage02.textContent = 'The form will never get through tho'
    finalMessage03.textContent = '[Insert Text]'

    document.body.append(blackOverlay)
    blackOverlay.append(finalMessage01)
    blackOverlay.append(finalMessage02)
    blackOverlay.append(finalMessage03)
  }

  function firstClick() {
    submitButton.classList.add('position-01')
    submitButton.addEventListener('click', secondClick)
    submitButton.removeEventListener('click', firstClick)
  }

  function secondClick() {
    submitButton.classList.add('position-02')
    submitButton.addEventListener('click', thirdClick)
    submitButton.removeEventListener('click', secondClick)
  }

  function thirdClick() {
    submitButton.classList.add('position-03')
    submitButton.disabled = true
    submitForm()
    submitButton.removeEventListener('click', thirdClick)
  }

  submitButton.addEventListener('click', firstClick)
}
