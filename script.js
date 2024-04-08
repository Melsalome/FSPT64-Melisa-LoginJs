
const passwordInput = document.querySelector("#password");
const passwordIcon = document.querySelector(".password-toggle-icon i");
// ESTE ES EL ESTADO DEL PASSWORD
let isPasswordRevealed = false; 
//
const ojoAbierto = "fa-eye-slash";
const ojoCerrado = "fa-eye";
const contraseña = "password";
const texto = "text";

const buttons = document.querySelectorAll(".btn");
const circle = document.querySelector(".circle");
let isCircleOrange = true;
let buttonSingUpClass =  buttons[0].classList;
let buttonNewAccountClass = buttons[1].classList;

const passwordRevelation = () => {
    if(isPasswordRevealed === false) {
      passwordIconAction(texto,ojoCerrado,ojoAbierto);
    isPasswordRevealed = true;
    } else {
        passwordIconAction(contraseña,ojoAbierto,ojoCerrado);
    isPasswordRevealed = false;
    }
};

const passwordIconAction = (texto, textoRemove, textoAdd) => {
    passwordInput.type = texto;
    passwordIcon.classList.remove(textoRemove);
    passwordIcon.classList.add(textoAdd); 
}


const circleColorAction = () => {
    if(isCircleOrange){
        circleFirstAction();
        buttonSingUpClass.value = "btn extracolor";
        buttonNewAccountClass.value = "btn extracolor";
        isCircleOrange = false;
    } else {
        circleSecondAction();
        buttonSingUpClass.value = "btn";
        buttonNewAccountClass.value = "btn";
        isCircleOrange = true;
    }
};

const circleSecondAction = () => {
    circle.classList.remove("extracolor");
    circle.classList.add("thirdcolor");
}

const circleFirstAction = () => {
    circle.classList.remove("thirdcolor");
    circle.classList.add("extracolor");
}
