
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
    
    let count = false;
    for (let key in obj) {
        if (obj[key]=='') {
            count=true;
        };
    };
    if (count == false) {
        localStorage.setItem('email_data', JSON.stringify(obj)); 
        window.location.href = '/email-done.html';
         
        //console.log('hi');     
    }
    else {
        swal('Sorry !',' Please give each information to go to the next page.','warning'); 
    };
    
   // console.log('hi');
};

let nextPage = () => {
    window.location.href = '/email-done.html';
};




