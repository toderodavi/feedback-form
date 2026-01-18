export function textAreaFeedback() {
  const textarea = document.querySelector('.textarea-feedback')
  const parentElement = document.querySelector('.form-feedback-field')
  const feedbackTalk = document.createElement('p')
  feedbackTalk.className = 'feedback-talk'
  let dialogueIndex = 0
  const dialogue = [
    '(＃°Д°) Wait!',
    '(°ー°〃) Uhh...',
    '（*゜ー゜*） It has been some time since someone came here!',
    "(°ー°〃) You know, it's not like much people have something to give feedback about...",
    '(。_。)',
    '(⊙ˍ⊙)',
    '(⊙_⊙)？',
    '(⊙_⊙;)',
    '（⊙ｏ⊙）',
    '(⊙_(⊙_⊙)_⊙)',
    'Σ(っ °Д °;)っ I forgor! I closed the input thingie!',
    "ε=ε=ε=┏(゜ロ゜;)┛ I'll b right back!",
    '...',
    '. . .',
    '. . . .',
    'o(><；)oo Here!',
    "つ﹏⊂ Sorry about this... I won't get in your way...",
    'つ﹏⊂',
    'つ﹏°',
    'つ﹏° ... You will not inject SQL... right?',
    'つ﹏°',
  ]

  function startTextAreaDialogue(event) {
    event.stopPropagation()

    textarea.className = 'textarea-shy'
    parentElement.append(feedbackTalk)
    advanceTextAreaDialogue()

    textarea.removeEventListener('click', startTextAreaDialogue)
    parentElement.addEventListener('click', advanceTextAreaDialogue)
  }

  function advanceTextAreaDialogue() {
    if (dialogueIndex < dialogue.length) {
      if (dialogueIndex === 15) {
        textarea.className = 'textarea-feedback'
      }
      const currentDialogue = dialogue[dialogueIndex]
      feedbackTalk.textContent = currentDialogue
      dialogueIndex++
    }
    if (dialogueIndex >= dialogue.length) {
      const submitButton = document.querySelector('.submit-button')
      submitButton.disabled = false
    }
  }

  textarea.addEventListener('click', startTextAreaDialogue)
}
