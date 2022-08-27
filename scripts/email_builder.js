
let getData = (event) => {
    event.preventDefault();
    //let data = JSON.parse(localStorage.getItem('email_data'));
    

    let obj = {
        subject: document.getElementById('subject').value,
        name: document.getElementById('name').value,
        your_email: document.getElementById('sender-email').value,
        reciever_email: document.getElementById('reciever-email').value,
        number: document.getElementById('number').value,
        message: document.getElementById('message').value,
        
    };
    
    let count = false;
    for (let key in obj) {
        if (obj[key]=='') {
            count=true;
        };
    };
    if (count == false) {
        localStorage.setItem('email_data', JSON.stringify(obj)); 
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 6000
        });
        //console.log('hi');     
    }
    else {
       
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Please fill each information.',
            showConfirmButton: false,
            timer: 6000
        });
    };
    
   // console.log('hi');
};

let nextPage = () => {
    window.location.href = 'email-done.html';
};




