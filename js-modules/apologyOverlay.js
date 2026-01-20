export function apologyOverlay() {
  const formHeaderSection = document.querySelector('.form-header')
  const apologySpan = document.querySelector('.apology-span')

  async function handleApologySpanClick() {
    const response = await fetch('apology.txt')
    const apologyParagraph = document.createElement('p')
    apologyParagraph.className = 'apology-paragraph'
    apologyParagraph.textContent = await response.text()
    formHeaderSection.append(apologyParagraph)

    // Function to create button that deletes all apology paragraphs
    // But the button itself keeps there
    setTimeout(() => {
      if (document.querySelector('.close-apology-paragraph-button')) {
        return
      }
      const closeButton = document.createElement('button')
      closeButton.className = 'close-apology-paragraph-button'
      closeButton.textContent = 'X'
      formHeaderSection.append(closeButton)
      closeButton.onclick = () => {
        const apologyParagraphs = document.querySelectorAll('.apology-paragraph')
        for (const apologyParagraph of apologyParagraphs) {
          apologyParagraph.remove()
        }
      }
    }, 7000)
  }
  apologySpan.addEventListener('click', handleApologySpanClick)
}
