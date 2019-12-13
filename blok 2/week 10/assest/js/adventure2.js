const textElement = document.getElementById('description')
const optionButtonsElement = document.getElementById('game-buttons')
const title = document.getElementById('h1')

function newTitle(){
  document.getElementById('h1').innerHTML = 'hoi';
}


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}



function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('button')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}




const textNodes = [
  {
    id: 1,
    text: 'Je kunt kiezen tussen 3 verhaal lijnen:',
    options: [
      {
        text: 'het bos',
        nextText: 2
      },
      {
        text: 'het gras',
        nextText: 3
      },
      {
          text: 'de woestijn',
          nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'hoi',
    options: [
      {
        text: 'ja',
      }
    ]
  }
]

startGame()