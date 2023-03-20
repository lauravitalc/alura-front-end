function playSound(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listSounds = document.querySelectorAll('.tecla');

for (let i = 0; i < listSounds.length; i++) {
    const sound = listSounds[i];
    const instrument = sound.classList[1];
    const idAudio = `#som_${instrument}`; // Template String

    sound.onclick = function(){
        playSound(idAudio);
    }

}

/*
Comments:
Change tocaSomPom() and tocaSomPom - Read the console.
document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/