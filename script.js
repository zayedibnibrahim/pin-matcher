function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const showPin = document.getElementById("showPin");
    const generatePin = showPin.value = getPin();
    return generatePin;
}

//Match the pin
const buttonBody = document.querySelectorAll(".button");
const typePin = document.getElementById("typePin");
let screenValue = "";
for (let i = 0; i < buttonBody.length; i++) {
    const element = buttonBody[i];
    element.addEventListener('click', function (e) {
        const btnText = e.target.innerText;
        screenValue = screenValue + btnText;
        typePin.value = screenValue;
    })
}

//After submit
document.querySelector(".submit-btn").addEventListener('click', function(){
    const genDisplay = document.getElementById("showPin").value;
    const pinDisplay = document.getElementById("typePin").value;
    if(genDisplay == pinDisplay){
        document.querySelector(".success").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.getElementById("error-count").style.display = "none";
        
    }else{
        document.querySelector(".error").style.display = "block";
        document.querySelector(".success").style.display = "none";
        let errorCounter = document.getElementById("error-count");
        let counterNumber = errorCounter.innerText;
        counterNumber = counterNumber - 1;

        errorCounter.innerHTML = counterNumber;
        if(counterNumber == 0){
            alert("Sorry, No luck");
        }
    }
})