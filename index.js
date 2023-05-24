for (let i = 0; i < document.querySelectorAll(".drum-pad").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let key = this.textContent.toLowerCase();
        playSound(key);
        displayKey(key);
        buttonAnimation(key);
    });
}


document.addEventListener("keydown", function (event) {
    playSound(event.key);
    displayKey(event.key);
    buttonAnimation(event.key);
})


function playSound(key) {
    let audio = document.querySelector(`#${key.toUpperCase()}`);
    audio.play()
}

function buttonAnimation(key) {
    let buttonActive = document.querySelector("." + key);
    buttonActive?.classList?.add("pressed");

    setTimeout(function () {
        buttonActive?.classList?.remove("pressed");
    }, 100);
}

function displayKey(key) {
    document.getElementById('display').textContent = key.toUpperCase();
}