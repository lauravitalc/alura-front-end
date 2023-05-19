const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

// Quando nossa recognition começar, quero que pegue o result e ....
recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    verifica(chute); //Verifica se o chute possui um valor válido
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

// Quando acabar, inicie novamente
recognition.addEventListener('end', () => recognition.start());