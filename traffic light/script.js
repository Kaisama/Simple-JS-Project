document.addEventListener('DOMContentLoaded', () => {
    const redButton = document.querySelector('.button1');
    const yellowButton = document.querySelector('.button2');
    const greenButton = document.querySelector('.button3');
    const AllButton = document.querySelector('.button4');
    const AltButton = document.querySelector('.button5');

    const redCircle = document.getElementById('red');
    const yellowCircle = document.getElementById('yellow');
    const greenCircle = document.getElementById('green');

    let isFirstCircleRed = false;
    let isSecondCircleYellow = false;
    let isThirdCircleGreen = false;
    let isBlue = false;
    let isAltRunning = false; 

    function clearButtons() {
        redButton.style.backgroundColor = "white";
        yellowButton.style.backgroundColor = "white";
        greenButton.style.backgroundColor = "white";
        AllButton.style.backgroundColor = 'white';
        AltButton.style.backgroundColor = "white";
    }

    function updateColor() {
        if (isFirstCircleRed) {
            redCircle.style.backgroundColor = 'red';
        } else {
            redCircle.style.backgroundColor = '';
        }

        if (isSecondCircleYellow) {
            yellowCircle.style.backgroundColor = 'yellow';
        } else {
            yellowCircle.style.backgroundColor = '';
        }

        if (isThirdCircleGreen) {
            greenCircle.style.backgroundColor = "green";
        } else {
            greenCircle.style.backgroundColor = '';
        }

        if (isBlue) {
            redCircle.style.backgroundColor = "red";
            yellowCircle.style.backgroundColor = "yellow";
            greenCircle.style.backgroundColor = "green";
        }
    }

    function runAltSequence() {
        let interval = setInterval(() => {
            redCircle.style.backgroundColor = 'red';
            yellowCircle.style.backgroundColor = '';
            greenCircle.style.backgroundColor = '';
            AltButton.style.backgroundColor = 'red';
            setTimeout(() => {
                redCircle.style.backgroundColor = '';
                yellowCircle.style.backgroundColor = 'yellow';
                greenCircle.style.backgroundColor = '';
                AltButton.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    redCircle.style.backgroundColor = '';
                    yellowCircle.style.backgroundColor = '';
                    greenCircle.style.backgroundColor = 'green';
                    AltButton.style.backgroundColor = 'green';
                    setTimeout(() => {
                        redCircle.style.backgroundColor = '';
                        yellowCircle.style.backgroundColor = '';
                        greenCircle.style.backgroundColor = '';
                        AltButton.style.backgroundColor = '';
                        updateColor(); 
                        if (!isAltRunning) {
                            clearInterval(interval); 
                        }
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 4000);
    }

    function clear() {
        clearButtons();
        isAltRunning = false; 
    }

    redButton.addEventListener('click', () => {
        clear();
        isFirstCircleRed = true;
        isSecondCircleYellow = false;
        isThirdCircleGreen = false;
        isBlue = false;
        updateColor();
        redButton.style.backgroundColor = 'red';
    });

    yellowButton.addEventListener('click', () => {
        clear();
        isThirdCircleGreen = false;
        isFirstCircleRed = false;
        isSecondCircleYellow = true;
        isBlue = false;
        updateColor();
        yellowButton.style.backgroundColor = 'yellow';
    });

    greenButton.addEventListener('click', () => {
        clear();
        isSecondCircleYellow = false;
        isFirstCircleRed = false;
        isThirdCircleGreen = true;
        isBlue = false;
        updateColor();
        greenButton.style.backgroundColor = 'green';
    });

    AllButton.addEventListener('click', () => {
        clear();
        isFirstCircleRed = false;
        isSecondCircleYellow = false;
        isThirdCircleGreen = false;
        isBlue = true;
        updateColor();
        AllButton.style.backgroundColor = 'blue';
    });

    AltButton.addEventListener('click', () => {
        clear();
        isAltRunning = true; 
        runAltSequence();
    });

});
