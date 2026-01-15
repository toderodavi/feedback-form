export function numberSlider() {
  const labelToBeRemoved = document.querySelector('#fakeLabelForSlider')
  const parentElement = document.querySelector('#numberSliderDiv')
  const slider = document.createElement('input')
  const sliderValueDisplay = document.createElement('div')
  slider.type = 'range'
  slider.min = 0
  slider.max = 999999999
  slider.className = 'number-slider'
  sliderValueDisplay.className = 'number-value'

  labelToBeRemoved.addEventListener('click', () => {
    labelToBeRemoved.remove()
    parentElement.append(slider)
    parentElement.append(sliderValueDisplay)
  })

  slider.oninput = () => {
    const min = parseFloat(slider.min)
    const max = parseFloat(slider.max)
    const value = parseFloat(slider.value)
    const sliderWidth = slider.offsetWidth
    const thumbWidth = 16

    const percent = (value - min) / (max - min)
    const thumbPosition = percent * (sliderWidth - thumbWidth) + thumbWidth / 2

    sliderValueDisplay.textContent = slider.value
    sliderValueDisplay.style.left = `${thumbPosition}px`
  }
}
