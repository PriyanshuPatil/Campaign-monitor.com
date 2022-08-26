//alert('Your mail is ready to send');
let data = [];

let previous_data = JSON.parse(localStorage.getItem('email_data'));
let gallery = JSON.parse(localStorage.getItem('gallery'));
let array = { ...previous_data, ...gallery };
localStorage.setItem('complete_data', JSON.stringify(array));
let getData = JSON.parse(localStorage.getItem('complete_data'));
console.log('array',array);
data.push(getData);
console.log('data',data);

// console.log(array);






let div = document.getElementById('email_things');



data.forEach((ele) => {
    let big_div = document.getElementById('email');
    big_div.style.backgroundImage = `url(${ele.img})`;
    let sender = document.createElement('p');
    // console.log('hi');
    // let hi = data.img;
    // console.log(hi);
    // console.log('bye');
    
    sender.innerText ='From : '+ ele.your_email;
    sender.id = 'sender';
    console.log(ele.your_email);

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


