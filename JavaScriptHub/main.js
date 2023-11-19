//For handling navigation bar in small screens
const links = document.getElementById('nav-links');
const nav_btn = document.getElementById('nav-btn');
let flag;
window.onload = function(){
 if(window.innerWidth <= 992 && links.classList.contains('show-links'))flag = links.classList.toggle('show-links');
}

nav_btn.addEventListener('click',()=>{
  if(window.innerWidth <= 992)flag = links.classList.toggle('show-links');
});


window.addEventListener("resize",()=>{
  if(window.innerWidth > 992 && flag == false){
    flag =  links.classList.toggle('show-links');
  } 

  if(window.innerWidth <= 992 && links.classList.contains('show-links')){
    flag =  links.classList.toggle('show-links');
  } 
});

// Footer copy right year
let date = new Date();
document.getElementById('date').innerText = date.getFullYear();


//scroll up button 
const scroll_up_Btn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll',()=>{
        if(window.scrollY >= 400 && window.innerWidth < 768){
          scroll_up_Btn.style.display = 'block';
        }
        else{
          scroll_up_Btn.style.display = 'none';
        }
});

scroll_up_Btn.addEventListener('click',()=>{
   window.scrollTo({top:0, behavior:"smooth"});
});