//display
const display = document.querySelector('.display');
//buttons
const buttons = document.querySelectorAll('input[type="button"]');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            display.value = '';
        } else if (value === 'DE') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = math.evaluate(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            const allowed = "0123456789.+-*/";
            if (allowed.includes(value)) {
                display.value += value;
            }
        }
    })
})

document.addEventListener("keydown", function (event){
    event.preventDefault();
    const key = event.key;
    const allowed = "0123456789/*-+.";
    console.log(event);

    if (key === "Enter") {
        try {
            display.value = math.evaluate(display.value);
        } catch {
            display.value = 'Error';
        }
    }else if(key === "Backspace"){
        display.value = display.value.slice(0, -1);
    }else if(allowed.includes(key)){
        display.value+=key;
    }else if(key === "Escape"){
        display.value = "";
    }

    if(key === "Enter" || key === "Escape"){
    }
});