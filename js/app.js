import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
inputs.forEach((input1) =>{
    input1.addEventListener("blur",(input) => {
        validar (input.target);
    })
})