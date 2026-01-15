export function label() {
  const labels = document.querySelectorAll('.input-label')

  for (const label of labels) {
    const inputIndicator = document.createElement('div')
    inputIndicator.textContent = '|'
    inputIndicator.className = 'input-indicator'
    label.addEventListener('click', () => {
      label.classList.add('focus')
      label.append(inputIndicator)
    })

    document.addEventListener('click', (event) => {
      event.stopPropagation()
      if (!label.contains(event.target)) {
        label.classList.remove('focus')
        inputIndicator.remove()
      }
    })
  }
}
