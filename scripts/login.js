


let user_data = JSON.parse(localStorage.getItem('user_data')) || [];

// Login section

login_btn = document.getElementById('login_btn');

login_btn.addEventListener('click', loginFn);

function loginFn(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    verifyUser(email, password);

    
}


function verifyUser(email, password){
    let login_data = user_data.filter((e)=>{
        return e.email == email && e.password == password;
    });

    if(login_data.length != 0){
        alert("login Successfully!");
        window.location.href = "overview.html";
        localStorage.setItem('login_data', JSON.stringify(login_data));

    }
    else{
        alert("Invalid username or password!");
    }
    
}



//create account section

let create_account = document.getElementById('create_div');
create_account.addEventListener('click', ()=>{
    window.location.href = 'signup.html';
})