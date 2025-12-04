  //  Variable Declaration

let inputBox = document.getElementById('calc-input');

appendValue = (input) => {
    inputBox.value += String(input);
}

clearInput = () => {
    inputBox.value = "";
}


calculate = () => {
    try{
        inputBox.value = eval(inputBox.value);
    } catch(error) {
        inputBox.value = "";
    }
}