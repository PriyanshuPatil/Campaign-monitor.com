//alert('Your mail is ready to send');
let data = [];

let previous_data = JSON.parse(localStorage.getItem('email_data'));

data.push(previous_data);
console.log(data);
//let img_data = JSON.parse(localStorage.getItem(''));
// let array = data.concat(img_data);
// localStorage.setItem('complete_data', JSON.stringify());

// let getData = JSON.parse(localStorage.getItem(''));




let div = document.getElementById('email_things');



data.forEach((ele) => {
    let sender = document.createElement('p');
    sender.innerText ='From : '+ ele.your_email;
    sender.id = 'sender';

    let reciever = document.createElement('p');
    reciever.innerText ='To : '+ ele.reciever_email;
    reciever.id = 'reciever';

    let subject = document.createElement('h3');
    subject.innerText ='Subject : '+ ele.subject;
    subject.id = 'subject';

    let name = document.createElement('p');
    name.innerText ='Thanks and Regards,'+'\n'+'\n'+ ele.name;
    name.id = 'name';

    let number = document.createElement('p');
    number.innerText ='Contact no. : '+ ele.number;
    number.id = 'number';

    let message = document.createElement('p');
    message.innerText = ele.message;
    message.id = 'message';

    // let email_div = document.getElementById('email');
    // email_div.style.backgroundImage = 'url('')';

    let btn = document.getElementById('btn');
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Mail has been sent to ${ele.reciever_email}`,
            showConfirmButton: false,
            timer: 6000
        });
    });

    

    // let img = document.createElement('img');
    // img.src = ele.img;
    // img.id = 'img';

    div.append(sender, reciever,number, subject, message, name);
    
});


