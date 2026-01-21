export function textAreaFeedback() {
  const textArea = document.querySelector('.textarea-feedback')
  const parentElement = document.querySelector('.form-feedback-field')
  const feedbackDialogueParagraph = document.createElement('p')
  feedbackDialogueParagraph.className = 'feedback-dialogue'
  let dialogueIndex = 0
  const dialogue = [
    '(＃°Д°) Wait!',
    '(°ー°〃) Uhh...',
    '（*゜ー゜*） It has been some time since someone came here!',
    "(°ー°〃) You know, it's not like much people have something to give feedback about...",
    '(。_。)',
    '(⊙ˍ⊙)',
    '(⊙_⊙)？',
    '（⊙ｏ⊙）',
    'Σ(っ °Д °;)っ I forgor! I closed the input thingie!',
    "ε=ε=ε=┏(゜ロ゜;)┛ I'll b right back!",
    '...',
    '. . .',
    'o(><；)oo Here!',
    "つ﹏⊂ Sorry about this... I won't get in your way...",
    'つ﹏⊂',
    'つ﹏° ... You will not inject SQL... right?',
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
      if (dialogueIndex === 12) {
        textArea.classList.remove('shy')
      }
      const currentDialogue = dialogue[dialogueIndex]
      feedbackDialogueParagraph.textContent = currentDialogue
      dialogueIndex++
    }
    if (dialogueIndex === 13) {
      const submitButton = document.querySelector('.submit-button')
      submitButton.disabled = false
    }
  }
  textArea.addEventListener('click', startTextAreaDialogue)
}
