let login_data = JSON.parse(localStorage.getItem('login_data'))||[];

let username = login_data[0].fullName;

//append user name
let user = document.getElementById('user');
user.innerText = username;


//create compaign

let create_compaign = document.getElementById('create_compaign');
create_compaign.addEventListener('click', ()=>{
    window.location.href = 'email_builder.html';
})



//select a template
let select_template = document.getElementById('select_template');
select_template.addEventListener('click', ()=>{
    window.location.href = "gallery.html";
});


let choose_plan = document.getElementById('choose_plan');
choose_plan.addEventListener('click', ()=>{
    window.location.href = "pricing.html";
})