function navbarAfter(){
    return `
    <div id="navbar">
        <div id="nav-11">
        <div id="nav-div"> 
                <div id="logo" >
               <img src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/ico/favicon.ico?ver=298">
                </div>
                <div> <a href="./overview">Overview</a></div>
              <div> <a href="./gallery.html"> Campaigns</a></div>
              <div> <a href="./gallery.html">Gallery</a> </div>
              <div>  <a href="./gallery.html">Transactional</a></div>
              <div> <a href="./gallery.html"> Lists & subscribers</a></div>
              <div>  <a href="./gallery.html">Insights</a></div>
              <div>  <a href="./gallery.html">Integrations</a></div>
            </div>    
         <div id="nav-button">
               <button ><a href="./Pricing.html">View Plans</a></button>
               <div><img src="data:image/png;base64,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"></div>
                 <div id="user-name" ><a href="./logout.html">masai-team</a></div>  
                 <div ><img style="border-radius: 100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"></div> 
                
          </div>
           </div>
      </div>
        `
}






export default navbarAfter  ;










//for after

 // 1:------copy paste in head 
{/* <link rel="stylesheet" href="./navbar-after.css">*/}



 // 2 :------copy paste in body top
{/* <div id="navbar_container"></div>  */}
 



 // 3 :------copy paste in script file

{/*

<script type="module">
    import navbar_After from './components/navbar_after.js' ;
    let container=document.getElementById("navbar_container") ;
    container.innerHTML=navbar_After() ;
let user_name = document.querySelector('#user-name');
let user_data = JSON.parse(localStorage.getItem('user_data')) ;
if(user_data.length>=1){
    let user=user_data[user_data.length-1] ;
user_name.innerHTML=user.fullName  ;
}
let nav_butt = document.querySelector('#nav-button>button');
 nav_butt.addEventListener('click', ()=>{
        window.location.href = "Pricing.html";
 })
 let overview = document.querySelector('#logo');
 overview.addEventListener('click', ()=>{
        window.location.href = "overview.html";
 })
</script>


*/}