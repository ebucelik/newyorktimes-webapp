const form = document.querySelector('#registerForm') as HTMLFormElement;
const errorDiv = document.querySelector('#error') as HTMLDivElement;
const successDiv = document.querySelector('#success') as HTMLDivElement;

hideErrorDiv(true);
hideSuccessDiv(true);

if (form != null) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        successDiv.hidden = true;
    
        const emailInput = document.querySelector('#email') as HTMLInputElement;
    
        if (validateEmail(emailInput.value)) {
            setErrorDiv("");
        } else {
            setErrorDiv("E-Mail is not valid.");
    
            return;
        }
    
        const passwordInput = document.querySelector('#password') as HTMLInputElement;
    
        if (passwordInput.value.length > 4) {
            setErrorDiv("");
        } else {
            setErrorDiv("Password is to weak.");
    
            return;
        }
    
        const phoneNumberInput = document.querySelector('#phonenumber') as HTMLInputElement;
    
        if (phoneNumberInput.value.length > 0) {
            if (phoneNumberInput.value.length > 8) {
                setErrorDiv("");
            } else {
                setErrorDiv("Phone number is not valid.");
        
                return;
            }
        }
    
        hideErrorDiv(true);
        hideSuccessDiv(false);
        successDiv.textContent = "Successfully registered!"
    });
}

export function validateEmail(email: string): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { // eslint-disable-line
        return true;
    }

    return false;
}

function setErrorDiv(info: string) {
    errorDiv.textContent = info;
    errorDiv.hidden = info.length <= 0;
}

function hideErrorDiv(hidden: boolean) {
    if (errorDiv != null) {
        errorDiv.hidden = hidden;
    }
}

function hideSuccessDiv(hidden: boolean) {
    if (successDiv != null) {
        successDiv.hidden = hidden;
    }
}