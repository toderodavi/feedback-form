export function apologyModule() {
  const apologySpan = document.querySelector('#apologySpan')
  const formHeader = document.querySelector('#formHeader')

  async function apologyMessage() {
    const response = await fetch('apology.txt')
    const apologyMessage = document.createElement('p')
    apologyMessage.className = 'apology-message'
    apologyMessage.textContent = await response.text()
    formHeader.append(apologyMessage)

    // Function to create button that deletes all messages
    // But the button itself keeps there (lots of it actually)
    setTimeout(() => {
      const closeBtn = document.createElement('button')
      const existingMessages = document.querySelectorAll('.apology-message')
      closeBtn.className = 'close-apology-btn'
      closeBtn.textContent = 'X'
      formHeader.append(closeBtn)
      closeBtn.onclick = () => {
        for (const existingMessage of existingMessages) {
          existingMessage.remove()
        }
      }
    }, 8000)
  }

  apologySpan.addEventListener('click', apologyMessage)
  apologySpan.addEventListener('mouseenter', () => {
    const apologyHref = document.createElement('p')
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
