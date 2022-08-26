let data = JSON.parse(localStorage.getItem("gallery"))||[];
let cont = document.getElementById("container")


function append_data(el){
    cont.innerHTML=null;
  
        console.log(el)
        let div1 = document.createElement("div")
        div1.setAttribute("class","inner1")
    

    let title = document.createElement("h1");
    title.innerText=el.title;
    let p = document.createElement("p");
    p.innerText = el.p;

    let div11 = document.createElement("div")
    div11.setAttribute("class","btndiv")

    let btn1 = document.createElement("button")
    btn1.innerText = "Lets Get Started"

    let btn2  = document.createElement("button")
    btn2.innerText = "See their Story"

    div11.append(btn1,btn2);
    div1.append(title,p,div11);
    let div2 = document.createElement("div")
        div2.setAttribute("class","inner2")

    let img = document.createElement("img")
    img.src = el.img

    div2.append(img)
    cont.append(div1,div2)
    }
    

append_data(data);