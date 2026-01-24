export function colorSelectOptions() {
  const colorSelect = document.getElementById('colorSelect')
  const colors = [
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#F44336',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
    '#FCE4EC',
    '#F8BBD0',
    '#F48FB1',
    '#F06292',
    '#EC407A',
    '#E91E63',
    '#D81B60',
    '#C2185B',
    '#AD1457',
    '#880E4F',
    '#F3E5F5',
    '#E1BEE7',
    '#CE93D8',
    '#BA68C8',
    '#AB47BC',
    '#9C27B0',
    '#8E24AA',
    '#7B1FA2',
    '#6A1B9A',
    '#4A148C',
    '#E3F2FD',
    '#BBDEFB',
    '#90CAF9',
    '#64B5F6',
    '#42A5F5',
    '#2196F3',
    '#1E88E5',
    '#1976D2',
    '#1565C0',
    '#0D47A1',
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
  ]

  setTimeout(() => {
    for (const color of colors) {
      const newColorOption = document.createElement('option')
      newColorOption.value = color
      newColorOption.textContent = color
      colorSelect.append(newColorOption)
    }
  }, 50)

  function mouseTrail() {
    let mousePosition
    window.onmousemove = (e) => {
      mousePosition = {
        x: e.x,
        y: e.y,
      }
      const mouseTrailDot = document.createElement('div')
      mouseTrailDot.className = 'mouse-trail-dot'
      mouseTrailDot.style.left = `${mousePosition.x}px`
      mouseTrailDot.style.top = `${mousePosition.y}px`
      mouseTrailDot.style.backgroundColor = colorSelect.value
      document.body.append(mouseTrailDot)

      setTimeout(() => {
        mouseTrailDot.remove()
      }, 500)
    }
  }

  colorSelect.addEventListener('input', () => {
    mouseTrail()
  })
}
