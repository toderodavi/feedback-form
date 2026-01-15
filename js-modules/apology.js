export function apologyModule() {
  const apologySpan = document.querySelector('#apologySpan')
  const formHeader = document.querySelector('#formHeader')

  async function apologyMessage() {
    const response = await fetch('apology.txt')
    const apologyMessage = document.createElement('p')
    apologyMessage.className = 'apology-message'
    apologyMessage.textContent = await response.text()
    formHeader.append(apologyMessage)

    setTimeout(() => {
      const closeBtn = document.createElement('button')
      const existingMessage = document.querySelector('.apology-message')
      closeBtn.className = 'close-apology-btn'
      closeBtn.textContent = 'X'
      formHeader.append(closeBtn)
      closeBtn.onclick = () => {
        existingMessage.remove()
      }
    }, 7000)
  }

  apologySpan.addEventListener('click', apologyMessage)
  apologySpan.addEventListener('mouseenter', () => {
    const apologyHref = document.createElement('p')
    // prob change this content later
    apologyHref.textContent = 'https://feedback-form/apology.html'
    apologyHref.className = 'apology-href'
    formHeader.append(apologyHref)
    setTimeout(() => {
      apologyHref.classList.add('visible')
    }, 0)
  })
  apologySpan.addEventListener('mouseout', () => {
    const apologyHref = document.querySelector('.apology-href')
    apologyHref.remove()
  })
}
