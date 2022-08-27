let cards_data = [
    {   img:'https://www.picsartphotoediting.com/wp-content/uploads/2021/02/background-download-19.jpg',
        title:'Jaybird',
        p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

    },
     {   img:' https://wtspdp.com/wp-content/uploads/2022/01/1641732914_Picsart-background-hd-images-download.jpg',
        title:'Rip Curl',
        p:'With a reputation as the go-to company for everything surf, Rip Curl inspires anyone who wants to catch a wave. Rip Curl’s global email marketing campaigns promote their gear, from wetsuits, to board shorts, to watches, to bikinis.',

    },
     {   img:'https://www.mwallpapers.com/download-image/776142/1080x1920',
        title:'SXSW',
        p:'SXSW is an annual music, film, and interactive conference. Hundreds of thousands of creative professionals descend on the city of Austin to exchange ideas. Email allows SXSW to drive registration, attendance, and interest in this magical event.',

    },
     {   img:'data:image/jpeg;base64,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',
        title:'On',
        p:'Swiss running shoe company On sells gravity-defying gear that reinvent the way you run. On stays ahead of the pack by using email marketing and automation to promote new products and engage with runners around the globe.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE04A2fR3aUH4T1ApT6CJi7sMGe_645uWejQ&usqp=CAU',
        title:'Flume',
        p:'Flume is an award-winning electronic musician and producer that consistently breaks the charts and wows his fans. Flume turns to Campaign Monitor to drop new albums, announce world tours, sell concert tickets, and connect with his diehard global fanbase.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0ICGoD5KPQPP7nklpKKTuskfGtCv7B9f0g&usqp=CAU',
        title:'Monica Vinader',
        p:'Monica Vinader, also known as the jeweler to the stars, sells the most elegant and refined jewelry. Email marketing is a fantastic way for Monica Vinader to introduce new pieces, and automation keeps customers coming back for more.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_IJ6MIhYgRb945JZ9UykW66VHWzzbG5fSDA&usqp=CAU',
        title:'Drake Hotel Properties',
        p:'The ultra-cool Drake Hotel generates both bookings and buzz with email marketing and automation by Campaign Monitor. From hotel stays to restaurant reservations to concert tickets—it’s one list everyone wants to be on.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNdnXZ23Yy6_FSMs2uZNaTXkpRl4Kdlrceg&usqp=CAU',
        title:'Chatbooks',
        p:'Chatbooks creates super affordable photo books from the photos you take on your smart phone as well as the photos you post to social media. Chatbooks turns to Campaign Monitor to send relevant and timely email campaigns that convert new customers and then keep them coming back for more.',

    },
    {   img:'https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg',
        title:'GlamCorner',
        p:'Designer dress rental business GlamCorner keeps women in fashion, on a dime. Email marketing lets their customers know when new collections are available, and automation turns one time shoppers into GlamCorner advocates.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJcVyPW-Uy4kvsUF8wLXFEhs2nfuf3G1G8Q&usqp=CAU',
        title:'Birchbox',
        p:'Birchbox packages up beauty, grooming, and lifestyle products for men and women. They have rolled out a trendsetting subscription service and online shop. Birchbox promotes their brand and monthly box of goodies with targeted email campaigns.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4DsmucLDMxCJmWxinP0H4mBJHojF3IWpyA&usqp=CAU',
        title:'Nicki Minaj',
        p:'Nicki Minaj relies on email marketing to connect with her fans and invite them to special events. She used Campaign Monitor to announce her Pinkprint Tour and give her subscribers access to pre-sale tickets and VIP packages.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pygi3ycBDmF9aQN9LHLidSRSrLHxmPqaRA&usqp=CAU',
        title:'UNICEF New Zealand',
        p:'UNICEF New Zealand uses Campaign Monitor to tell stories, connect with supporters, and raise funds for furthering the rights of children. Take a peek at UNICEF New Zealand’s powerful end-of-year email marketing campaign, encouraging their community to transform children’s lives with a gift or donation.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4hX3LHHx3o1gW8-i8Q7xsG8zt7ln9uv_mA&usqp=CAU',
        title:'Flight Centre',
        p:'Flight Centre travel group uses Campaign Monitor to connect with their VIP travellers and promote their latest and greatest deals. Email marketing helps them boost web traffic, online bookings, and the bottom line.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9WV8Cv__LdCNsHtdItX8MXx0F8J6AUCBmA&usqp=CAU',
        title:'Resy',
        p:'Resy is an app that gives foodies the best restaurant booking experience and gives restaurants the technology to manage it all. They use email marketing to shed light on the trendiest restaurants, encouraging foodies to grab their appetite and book their next night out.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KTN_kVxc8uGpS_O_WBWj5dnqEfwfKX43Uw&usqp=CAU',
        title:'Rolling Stone Australia',
        p:'For nearly 50 years Rolling Stone has celebrated pop culture. Rolling Stone Australia’s weekly newsletter offers snippets from recent articles while encouraging subscribers to explore the whole story which is just one click away.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YY-Mwy8EN3fVmA7d12bKCiQrcjL-MKM6GA&usqp=CAU',
        title:'Jaybird',
        p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6keDGW0lK97XcjaEOP3NPqFVALn3HpwX8eg&usqp=CAU',
        title:'Jaybird',
        p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJPHB_gExAeZ4IR6JMWqWS7_IQ4Xdu8hejQ&usqp=CAU',
        title:'Jaybird',
        p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqpdWcVHbCwVTM-JbHFdmdEremBVkRIDVmQ&usqp=CAU',
        title:'Jaybird',
        p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI55qI-bt6vgofgbon6gmqZvQJeSQ7gugfDw&usqp=CAU',
        title:'Jaybird',
        p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

    },
    {   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthtnxr6NOJqGNAGJ0rZbPzH9lu_lbRFK7mQ&usqp=CAU',
    title:'Jaybird',
    p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI55qI-bt6vgofgbon6gmqZvQJeSQ7gugfDw&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94aPlGQXnsPpVrE_6d_MK2mgZrvN99XsgjA&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI55qI-bt6vgofgbon6gmqZvQJeSQ7gugfDw&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3xpTsKh2fI2DhN7AFnhY5xjOGLdFPjJ_rQ&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBt0i5qwp8NVk00yrOyf6WPD5xilFjFZUzA&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BmlXfIYawnbuiuoZpiP2Yq_SM4ubwKgKMg&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHM6oUT_Q6zkWxsPkPy1w8qp3KTNpJGVBpQ&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI33-AjYghGYCA1HZ-rcV0hCReaZ7Kemkqdg&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_rYRpUmkOFXzI1uPiGWEx8pLmf5MEUUd2Q&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvr-3e-tG_VyVEVzni6tmptT5crrlRkXOhjQ&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupyUZRC33iEOs0e_krhENPhIVRYV_zvFA1A&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6e7ZrNsCUSVpnXcrdOyimT2wucQnQGUIS6w&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1-yKjJTYrMQ04v52oQVC7oByPKDnm-HKeA&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqnJkG5ErZbNL58-dg0p5_BoO4iC7DK2KUA&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-HEMQ3c44eA5fSc6vy6_pqGAs6aFGjSWyw&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhsSI3fs4bOkn_7TfKUJZuJMLVDAMU00rBQ&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEv9Ha8rMFthbWehhPym4x3pL3mdKFl2FNA&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufLVBRe0LIzKB6AtSWQcSNB9qtV7s5INiUQ&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkw85bSNay6y9Agulin12TB7h0jaAQl_-Dg&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-GtsT1l9TJJNAySTMmpn_pckBtgOVdlgbg&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewazrWAIfFOIAnWFf3wfJSIxDr0Vyx3Zs9g&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtYzmA8shSX8aWvkx0P0RURYlNX4jFjcFxg&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},
{   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklABXQPpEjZSMsiu4Zz0ZoP0bxY4x6Hf3sQ&usqp=CAU',
title:'Jaybird',
p:'Jaybird’s has the industry’s best bluetooth sports headphones and earbuds. Jaybird uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.',

},

]
console.log(cards_data)
function data_append(){
    let cont = document.querySelector(".cards")
    cards_data.forEach(function(el){
        let div = document.createElement("div")
        // div.setAttribute("class","cards1")


        let img = document.createElement("img")
        img.src = el.img;
        let div1 = document.createElement("div");
        div1.setAttribute("class","overlay")
        let title = document.createElement("p")
        title.setAttribute("class","text")
        title.innerText = el.title;
        div1.append(title)
        div.append(img,div1);

        cont.append(div)
        div.addEventListener("click",function(){
            location.href="template.html"
            itemLS(el);
        })
    })
}
data_append()
let itemLS = (item_data)=>{
localStorage.setItem("gallery",JSON.stringify(item_data))
}