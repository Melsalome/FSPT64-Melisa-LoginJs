
const _passwordInput = document.getElementById("password");
const passwordIcon = document.querySelector('[data-fn="revealedClick"]');
// ESTE ES EL ESTADO DEL PASSWORD
let isPasswordRevealed = false; 
//
const _ojoAbierto = "fa-eye-slash";
const _ojoCerrado = "fa-eye";
const _contraseña = "password";
const _texto = "text";

const buttons = document.querySelectorAll(".btn");
const circle = document.querySelector(".circle");
let isCircleOrange = true;
let buttonSingUpClass =  buttons[0].classList;
let buttonNewAccountClass = buttons[1].classList;

 passwordIcon.addEventListener("click", function () {
    if(isPasswordRevealed === false) {
      _passwordIconAction(_texto,_ojoCerrado,_ojoAbierto);
    isPasswordRevealed = true;
    } else {
        _passwordIconAction(_contraseña,_ojoAbierto,_ojoCerrado);
    isPasswordRevealed = false;
    }
})

const _passwordIconAction = (text, textoRemove, textoAdd) => {
    _passwordInput.type = text;
    _passwordIcon.classList.remove(textoRemove);
    _passwordIcon.classList.add(textoAdd); 
}


circle.addEventListener("click", function (){
    if(isCircleOrange){
        circle.classList.remove("thirdcolor");
        circle.classList.add("extracolor");
        buttonSingUpClass.value = "btn extracolor";
        buttonNewAccountClass.value = "btn extracolor";
        isCircleOrange = false;
    } else {
        _circleAction();
        buttonSingUpClass.value = "btn";
        buttonNewAccountClass.value = "btn";
        isCircleOrange = true;
    }
})

const _circleAction = () => {
    circle.classList.remove("extracolor");
    circle.classList.add("thirdcolor");
}

