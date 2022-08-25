let user_details = new User();

let user = document.getElementById('user');
user.innerText = user_details.displayName();



let radio_value = document.getElementsByName('use');
let get_started_btn = document.getElementById('get_started');

radio_value.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if(e.checked){
            console.log(e);
            get_started_btn.disabled = false;
            get_started_btn.style.color = 'white';
            get_started_btn.style.backgroundColor = 'rgb(93, 0, 255)';

            get_started_btn.addEventListener('click', ()=>{
                 
                window.location.href = "overview.html";
            })
            
        }
    })
    
})


