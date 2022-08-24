
let getData = () => {
    //let data = JSON.parse(localStorage.getItem('email_data'));
    

    let obj = {
        subject: document.getElementById('subject').value,
        name: document.getElementById('name').value,
        your_email: document.getElementById('sender-email').value,
        reciever_email: document.getElementById('reciever-email').value,
        number: document.getElementById('number').value,
        message: document.getElementById('message').value,
        
    };
    
    let count = 0;
    for (let key in obj) {
        if (obj[key]=='') {
            count++;
        };
    };
    if (count == 0) {
        window.location.href='email-done.html'; 
        localStorage.setItem('email_data', JSON.stringify(obj));
         
    }
    else {
        alert('Sorry, but please give each information to go to the next page'); 
    };
    
   // console.log('hi');
};



