let user_data = JSON.parse(localStorage.getItem('user_data')) || [];

let login_data = JSON.parse(localStorage.getItem('login_data')) || [];

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
            alert('Password length should be >= 8');
            return false;
        }

        return true;
        
    }

    signup(fullName, company, email, password){
        if(fullName == "" || company == "" || email == "" || password == ""){
            alert("Please fill all input fields!");
            return;
        }

        
        this.fullName = fullName;
        this.company = company;
        this.email = email;
        this.password = password;

        let isPresent = user_data.filter((e)=>{
            return e.email == email;
        });

        if(isPresent.length != 0){
            alert("User email is already present. Use another email to create an account.");
            return;
        }
        let isValidate = false;

        isValidate = this.validateEmail(email) && this.validatePassword(password);
        if(isValidate==false)
            return;

        if(isValidate && isPresent.length == 0){
            user_data.push(this);
            localStorage.setItem('user_data', JSON.stringify(user_data));

            login_data.pop();
            login_data.push(user_data[user_data.length-1]);
            localStorage.setItem('login_data', JSON.stringify(login_data));
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
