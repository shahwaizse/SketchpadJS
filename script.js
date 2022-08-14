function resPrompt(){
    const oldGrid = document.querySelector('.holder');
    if(oldGrid){
        oldGrid.remove();
    }
    let boxCount = prompt("number of pixels: ");
    if(boxCount > 100){
        boxCount = 100;
    }
    let containerSize = 500; //size will be set in px
    let boxSize = containerSize / boxCount;
    const container = document.createElement('div');
    container.classList.add('holder');
    container.setAttribute('style', `height: ${containerSize}px; width: ${containerSize}px;`);
    for(let x = 0; x < boxCount * boxCount; x++){
        let box = document.createElement('div');
        box.classList.add('cell');
        box.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px;`);
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        })
        container.appendChild(box);
    }
    document.body.appendChild(container);
}