function logout(){
    let login_data=[];
    localStorage.setItem('login_data', JSON.stringify(login_data)); 
    window.location.href="./home.html" ;
}