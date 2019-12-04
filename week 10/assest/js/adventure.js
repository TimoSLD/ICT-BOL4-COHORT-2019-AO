const textElement = document.getElementById('description');
const optionButtons = document.getElementById('game-buttons');

const titleElement = document.getElementById('title');
const titleItem = titleElement.parentElement[0];

const newTitle = document.createElement('h1');
newTitle.textContent = ('bos');

titleElement.replaceChild(newTitle, titleItem)


let inventoryItem = document.getElementById('inventoryItem') = {}

function startGame(){
    inventoryItem = {}
    showTextNode(1) 
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.getElementById('game-buttons')
            button.innertext = option.text
            button.classlist.add('game-buttons')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option){
    return true
}

function selectOption(option){

}

const textNodes = [
    {
        id: 1,
        text: 'je kunt kiezen tussen 3 verhaal-lijnen',
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
        text: 'je wordt wakker midden in het bos en je weet niet wat er is gebeurd, wat doe je?',
        options: [
            {
                text: 'naar het linker pad',
                nextText: 2.11
            },
            {
                text: 'naar het rechter pad',
                nextText: 2.12
            }
        ]
    },
    {
        id: 2.11,
        text: ''
    }

]

startGame()