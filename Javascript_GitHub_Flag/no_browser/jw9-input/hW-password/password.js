const passwordInput = document.getElementById("passwordInput");
const sampleButton = document.getElementById("sampleButton");
const rulesBox = document.getElementById("rulesBox");
const boxPassword = document.getElementById("boxPassword");
const container_trafficLight = document.getElementById("container_trafficLight");

boxPassword.addEventListener("click", function(event) {
    event.preventDefault();
});


function hasSpecialCharacter(str) {
    const specialCharPattern = /[^a-zA-Z0-9]/; // Regex to find any character that is not a letter or a number
    return specialCharPattern.test(str); // Return true if there is at least one special character
}

function countSpecialCharacters(str) {
    const specialCharPattern = /[^a-zA-Z0-9]/g;
    const matches = str.match(specialCharPattern);
    return matches ? new Set(matches).size : 0;
}

sampleButton.addEventListener("click", function() {
    
    boxPassword.classList.remove("glowRed", "glowYellow", "glowGreen");

    if (passwordInput.value.length < 6) {
        rulesBox.textContent = "Password deve conter entre 6 a 15 caracteres";
        rulesBox.style.color = "red";
        container_trafficLight.style.backgroundColor = "gray";
        container_trafficLight.textContent = "INVÁLIDA";

    } else if (passwordInput.value.length > 15) {
        rulesBox.textContent = "Password deve conter entre 6 a 15 caracteres";
        rulesBox.style.color = "red";
        container_trafficLight.style.backgroundColor = "gray";
        container_trafficLight.textContent = "INVÁLIDA";

  
    } else {
        const specialCharCount = countSpecialCharacters(passwordInput.value);
        
        if (specialCharCount === 0) {
            rulesBox.textContent = "Password deve conter pelo menos 1 caracter que não seja letra ou número";
            rulesBox.style.color = "red";
            container_trafficLight.style.backgroundColor = "red";
            container_trafficLight.textContent = "FRACA";
            boxPassword.classList.add("glowRed");

        } else if (specialCharCount === 1) {
            rulesBox.textContent = "Password de força média (contém pelo menos 1 caracter especial)";
            rulesBox.style.color = "yellow";
            container_trafficLight.style.backgroundColor = "yellow";
            container_trafficLight.textContent = "MÉDIA";
            boxPassword.classList.add("glowYellow");


        } else if (specialCharCount >= 4) {
            rulesBox.textContent = "Password forte (contém pelo menos 4 caracteres especiais diferentes)";
            rulesBox.style.color = "green";
            container_trafficLight.style.backgroundColor = "green";
            container_trafficLight.textContent = "FORTE";
            boxPassword.classList.add("glowGreen");

        } else {
            rulesBox.textContent = "Password de força média (contém caracteres especiais, mas menos de 4 diferentes)";
            rulesBox.style.color = "yellow";
            container_trafficLight.style.backgroundColor = "yellow";
            container_trafficLight.textContent = "MÉDIA";
            boxPassword.classList.add("glowYellow");
        }
    }
});

boxPassword.addEventListener("click", function(event) {
    event.preventDefault();
    boxPassword.classList.add("glowRed");
});