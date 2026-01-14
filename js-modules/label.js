export function label() {
  const label = document.querySelector('#inputLabel')
  const inputIndicator = document.createElement('div')
  inputIndicator.textContent = '|'
  inputIndicator.className = 'input-indicator'
  label.addEventListener('click', () => {
    label.classList.add('click')
    label.append(inputIndicator)
  })

  document.addEventListener('click', (event) => {
    event.stopPropagation()
    if (!label.contains(event.target)) {
      label.classList.remove('click')
      inputIndicator.remove()
    }
  })
}
