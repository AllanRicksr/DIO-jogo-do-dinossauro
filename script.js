const dino = document.querySelector('.dino');
let isJumping = false;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        jump();
    }
}

function jump() {
    let position = 0;
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {

                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    let cactusPosition = 1000 + 'px';
    background.appendChild(cactus);
}

createCactus();
document.addEventListener('keyup', handleKeyUp)