
            document.querySelector("form").addEventListener("click",myfun);
             function myfun(){
                event.preventDefault();

                let btn=document.querySelector("#btn");
                btn.addEventListener("click", function (){
                let name=document.getElementById("name").value;
                let last=document.getElementById("last").value;
                let email=document.getElementById("email").value;
                let company=document.getElementById("company").value;
                let no=document.getElementById("no").value;
           // let lastname=document.getElementById("last").value;
            if(name==""){
                swal("Error", "Enter your details","error");
            } else{
                swal("Thanks for your inquiry", "A member of our team will be in touch shortly to follow up with you.","success");
            }
            })
            }
