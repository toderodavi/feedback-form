export function labelAsInput() {
  const labelsAsInput = document.querySelectorAll('.fake-input')

  for (const labelAsInput of labelsAsInput) {
    const fakeInputIndicator = document.createElement('div')
    fakeInputIndicator.className = 'input-indicator'
    labelAsInput.addEventListener('click', () => {
      labelAsInput.classList.add('focus')
      labelAsInput.append(fakeInputIndicator)
    })

    document.addEventListener('click', (event) => {
      event.stopPropagation()
      if (!labelAsInput.contains(event.target)) {
        labelAsInput.classList.remove('focus')
        fakeInputIndicator.remove()
      }
    })
  }
}
