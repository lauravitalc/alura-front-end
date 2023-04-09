function playSound(selectorAudio) {
    const element = document.querySelector(selectorAudio);

    // element === null ? alert('Element not found.') : element.play();

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Elemento not found or wrong selector.');
    }
}

const listSounds = document.querySelectorAll('.tecla');

for (let i = 0; i < listSounds.length; i++) {
    const sound = listSounds[i];
    const instrument = sound.classList[1];
    const idAudio = `#som_${instrument}`; // Template String

    sound.onclick = function(){
        playSound(idAudio);
    }

    sound.onkeydown = function(event){ // when the user press the key down
        if(event.code === 'Space' || event.code === 'Enter'){
             sound.classList.add('ativa');
        }

    }
    sound.onkeyup = function(){
        sound.classList.remove('ativa');
    }

}

/*
Comments:
Change tocaSomPom() and tocaSomPom - Read the console.
document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/