export function binarySearchBirthdayInput() {
  const fakeBirthdayInput = document.getElementById('fakeDateOfBirth')
  const binarySearchWrapperDiv = document.querySelector('.binary-search-birthday-wrapper')
  const valueDisplayParagraph = document.getElementById('valueBinarySearch')
  const beforeButton = document.getElementById('beforeBinarySearchButton')
  const afterButton = document.getElementById('afterBinarySearchButton')
  const confirmButton = document.getElementById('confirmBinarySearchButton')

  let startDay = 1
  let endDay = 31
  let startMonth = 1
  let endMonth = 12
  let startYear = 1900
  let endYear = 2026
  let middleValue = Math.floor((startYear + endYear) / 2)
  valueDisplayParagraph.textContent = middleValue

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dez']

  let confirmedDay = 0
  let confirmedMonth = 0
  let confirmedYear = 0
  let count = 0

  function updateValueToDisplay() {
    if (count === 0) {
      middleValue = Math.floor((startYear + endYear) / 2)
      valueDisplayParagraph.textContent = middleValue
    } else if (count === 1) {
      middleValue = Math.floor((startMonth + endMonth) / 2)
      valueDisplayParagraph.textContent = months[middleValue - 1]
    } else if (count === 2) {
      middleValue = Math.floor((startDay + endDay) / 2)
      valueDisplayParagraph.textContent = middleValue
    }
  }

  function resetInitialValues() {
    count = 0
    startDay = 1
    endDay = 31
    startMonth = 1
    endMonth = 12
    startYear = 1900
    endYear = 2026
    middleValue = Math.floor((startYear + endYear) / 2)
    valueDisplayParagraph.textContent = middleValue
  }

  fakeBirthdayInput.addEventListener('click', () => {
    fakeBirthdayInput.disabled = true
    binarySearchWrapperDiv.classList.add('visible')
  })

  beforeButton.addEventListener('click', () => {
    if (count === 0) {
      endYear = middleValue - 1
    } else if (count === 1) {
      endMonth = middleValue - 1
    } else if (count === 2) {
      endDay = middleValue - 1
    }
    updateValueToDisplay()
  })

  afterButton.addEventListener('click', () => {
    if (count === 0) {
      startYear = middleValue + 1
    } else if (count === 1) {
      startMonth = middleValue + 1
    } else if (count === 2) {
      startDay = middleValue + 1
    }
    updateValueToDisplay()
  })

  confirmButton.addEventListener('click', () => {
    if (count === 0) {
      confirmedYear = middleValue
      count++
    } else if (count === 1) {
      confirmedMonth = middleValue
      count++
    } else if (count === 2) {
      confirmedDay = middleValue
      // The format for the input must be: "YYYY/MM/DD"

      let formattedDay = confirmedDay.toString().padStart(2, '0')
      let formattedMonth = confirmedMonth.toString().padStart(2, '0')
      let formattedYear = confirmedYear.toString().padStart(4, '0')

      fakeBirthdayInput.value = `${formattedYear}-${formattedMonth}-${formattedDay}`
      fakeBirthdayInput.disabled = false
      binarySearchWrapperDiv.classList.remove('visible')
      // Resets the values if the user wants to
      resetInitialValues()
      return
    }
    updateValueToDisplay()
  })
}
