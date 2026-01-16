export function textAreaFeedback() {
  const textarea = document.querySelector('.textarea-feedback')
  const parentElement = document.querySelector('.form-feedback-field')
  const feedbackTalk = document.createElement('p')
  feedbackTalk.className = 'feedback-talk'
  let dialogueIndex = 0
  const dialogue = [
    '(＃°Д°) Wait!',
    'Uhh... You know...',
    '（*゜ー゜*） It has been some time since someone came here!',
    "(°ー°〃) You know, it's not like much people have something to give feedback about...",
    '(。_。)',
    '(⊙ˍ⊙)',
    '(⊙_⊙)？',
    '(⊙_⊙;)',
    '（⊙ｏ⊙）',
    '(⊙_(⊙_⊙)_⊙)',
    'Σ(っ °Д °;)っ I forgot that I closed the input thingie!',
    "ε=ε=ε=┏(゜ロ゜;)┛ I'll be right back!",
    '...',
    '. . .',
    '.  .  .',
    'o(><；)oo Here!',
    "つ﹏⊂ Sorry about this... I won't get in your way...",
    'つ﹏⊂',
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
  }

  textarea.addEventListener('click', startTextAreaDialogue)
}
