export function textAreaFeedback() {
  const textArea = document.querySelector('.textarea-feedback')
  const parentElement = document.querySelector('.form-feedback-field')
  const feedbackDialogueParagraph = document.createElement('p')
  feedbackDialogueParagraph.className = 'feedback-dialogue'
  let dialogueIndex = 0
  const dialogue = [
    '(＃°Д°) Wait!',
    '（*゜ー゜*） It has been some time since someone came here!',
    '(°ー°〃) Ideally, people give up before reaching this textarea...',
    '(。_。)',
    '(⊙ˍ⊙)',
    '(⊙_⊙)？',
    'Σ(っ °Д °;)っ I forgor! I closed the text thingy!',
    "ε=ε=ε=┏(゜ロ゜;)┛ I'll be right back!",
    '...',
    'o(><；)oo Here!',
    "つ﹏⊂ Sorry... I won't get in your way...",
    'つ﹏°',
  ]

  function startTextAreaDialogue(event) {
    event.stopPropagation()

    textArea.classList.add('shy')
    parentElement.append(feedbackDialogueParagraph)
    advanceTextAreaDialogue()

    textArea.removeEventListener('click', startTextAreaDialogue)
    parentElement.addEventListener('click', advanceTextAreaDialogue)
  }

  function advanceTextAreaDialogue() {
    if (dialogueIndex < dialogue.length) {
      if (dialogueIndex === 9) {
        textArea.classList.remove('shy')
      }
      if (dialogueIndex === 9) {
        const submitButton = document.querySelector('.submit-button')
        submitButton.disabled = false
      }
      const currentDialogue = dialogue[dialogueIndex]
      feedbackDialogueParagraph.textContent = currentDialogue
      dialogueIndex++
    }
  }
  textArea.addEventListener('click', startTextAreaDialogue)
}
