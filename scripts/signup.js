let user_data = JSON.parse(localStorage.getItem('user_data')) || [];


class User{
    constructor(){
        this.oraganization = "Campaign Monitor";
    }

    validateEmail(email){
        let atPos = email.indexOf('@');
        let dotPos = email.indexOf('.');
        let len = email.length;
        

        if(atPos == 0){
            alert('@ can not be at first position');
            return false;
        }

        if((dotPos != (len-3)) && (dotPos != (len-4))){
            alert("Invalid email!!");
            return false;
        }

        return true;
        
    }

    validatePassword(password){
        let pwd_len = password.length;

        if(pwd_len<8){
            return false;
        }

        return true;

    }

    signup(fullName, company, email, password){
        this.fullName = fullName;
        this.company = company;
        this.email = email;
        this.password = password;

        let isValidate = false;

        isValidate = this.validateEmail(email) && this.validatePassword;

        if(isValidate){
            user_data.push(this);
            localStorage.setItem('user_data', JSON.stringify(user_data));
            window.location.href = "signup_welcome.html";

        }
        else{
            alert('Invalid input credentials');
            return;
        }
    }

    displayName(){
        let name = user_data[user_data.length-1].fullName;
        return name;
    }
}


function addUser(){
    let full_name = document.getElementById('full_name').value;
    let company = document.getElementById('company_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let u1 = new User();
    u1.signup(full_name, company, email, password);

}
