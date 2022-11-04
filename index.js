let validate = ()=>{
    let userId= document.getElementById('userId').value
    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    let zipCode = document.getElementById('zipCode').value
    let gender = document.querySelector('input[name="gender"]:checked');
    let lang = document.querySelector('.Checkbox').checked;
    
    let c1 = checkuserID(userId)
    let c2 = checkemail(email)
    let c3 = checkpassword(password)
    let c4 = checkname(name)
    let c5 = checkzipCode(zipCode)
    if(c1 && c2 && c3 && c4 && c5){
            alert("Form Submitted");            
    }
}
function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}

function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

function checkuserID(userId){
    if(userId.length >= 5 && userId.length <= 12)
    {  
        document.getElementById('userId').classList.add('success');
       
        document.getElementById('userId').classList.replace('error','success');
        document.getElementById('userId_error').innerText = ""
        return true;
    }
    else
    {  
        document.getElementById('userId').classList.add('error');
        document.getElementById('userId_error').innerText = "UserId must be 5 to 12"
    }
}

function checkemail(email){
    if(email.includes('@'))
    {  
        document.getElementById('email').classList.add('success');
        
        document.getElementById('email').classList.replace('error','success');
        document.getElementById('email_error').innerText = ""
        return true;
    }
    else
    {   
        document.getElementById('email').classList.add('error');
        document.getElementById('email_error').innerText = "Must be a valid email"
    }
}

function checkpassword(password){
    if(password.length > 6 && password.length < 13)
    {  
        document.getElementById('password').classList.add('success');

        document.getElementById('password').classList.replace('error','success');
        document.getElementById('password_error').innerText = ""
        return true;
    }
    else
    {  
        document.getElementById('password').classList.add('error');
        document.getElementById('password_error').innerText = "Password must be of length 7 to 12"
    }
}

function checkname(name) {
    if (allLetter(name)) {
        document.getElementById('name').classList.add('success');
       
        document.getElementById('name').classList.replace('error', 'success');
        document.getElementById('name_error').innerText = ""
        return true;
    }
    else {  
        document.getElementById('name').classList.add('error');
        document.getElementById('name_error').innerText = "Alphabet only"
    }
}

function checkzipCode(zipCode) {
    if (onlyNumbers(zipCode)) {
        document.getElementById('zipCode').classList.add('success');
        
        document.getElementById('zipCode').classList.replace('error', 'success');
        document.getElementById('zipCode_error').innerText = ""
        return true;
    }
    else {  
        document.getElementById('zipCode').classList.add('error');
        document.getElementById('zipCode_error').innerText = "Must be Numeric only"
    }
}
