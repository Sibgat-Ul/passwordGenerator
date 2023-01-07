let simple = document.getElementById("simple");
let strong = document.getElementById("strong");
let superStrong = document.getElementById("superStrong");
let lenOfPass = document.getElementById("len");
let display = document.getElementById("displayPassword");

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

let generate = () => {;
    let pass = "";
    let clicked = false;
    let len = lenOfPass.value;
    console.log(len)
    if (simple.checked){
        len = len <= 0 ? 10 : len;
        for(let i = 0; i < len; i++) {
            let typeArr = [getRandomLower(), getRandomUpper(), getRandomNumber()];
            pass += typeArr[Math.floor((Math.random() * 12) / 4)];
        }
    }

    if (strong.checked) {
        len = len <= 0 ? 12 : len;
        for (let i = 0; i < len; i++) {
            let typeArr = [
                getRandomLower(),
                getRandomUpper(),
                getRandomNumber(),
                getRandomSymbol(),
            ];
            pass += typeArr[Math.floor((Math.random() * 12) / 3)];
        }
    }
    
    if (superStrong.checked){
        len = len <= 0 ? Math.floor(Math.random() * 50) + 15 : len;
        for (let i = 0; i < len; i++) {
            let typeArr = [
                getRandomLower(),
                getRandomUpper(),
                getRandomNumber(),
                getRandomSymbol(),
            ];
            pass += typeArr[Math.floor((Math.random() * 12) / 3)];
        }
    }
    
    if (simple.checked || strong.checked || superStrong.checked)
        display.innerText = pass;
}

function copyPassword() {
    let text = display.innerText;
    navigator.clipboard.writeText(text)
    alert("Password Copied!")
}