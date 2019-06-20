var TEMPOS = ['slow', 'fast', 'mid-tempo'];
var TIME_SIGNATURES = ['4/4', '6/8'];
var INSTRUMENTS = ['rack tom', 'floor tom', 'crash', 'ride', 'hi-hat', 'snare', 'bass drum', 'rim', 'ride bell'];
var EMOTIONS = ['disgust', 'sorrow', 'lust', 'anger', 'power', 'love', 'loss', 'confusion', 'fear', 'distress', 'hopelessness', 'hope', 'jealousy', 'longing', 'excitement'];

var sentence = document.querySelector('.sentence');
var tempoSpan = document.querySelector('#tempo');
var timeSignatureSpan = document.querySelector('#time-signature');
var instrumentSpan = document.querySelector('#instrument');
var emotionSpan = document.querySelector('#emotion');

var generate = function(e) {
    sentence.classList.remove('hidden');
    animateCSS('.sentence', 'pulse');
    tempoSpan.textContent = getRandom(TEMPOS, 1)[0];
    timeSignatureSpan.textContent = getRandom(TIME_SIGNATURES, 1)[0];
    emotionSpan.textContent = getRandom(EMOTIONS, 1)[0];
    instrumentSpan.textContent = getRandom(INSTRUMENTS, 1)[0];
}

var getRandom = function(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

var goButton = document.querySelector('#go');
goButton.addEventListener('click', generate);


function animateCSS(element, animationName, callback) {
    var node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
