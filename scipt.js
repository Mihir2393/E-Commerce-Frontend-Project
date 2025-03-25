const formcontainer = document.querySelector('.formcontainer');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnregister-popup');
const iconClose= document.querySelector(''.icon-close);

registerLink.addEventListener('click', ()=> {
    formcontainer.classList.add('active');
});

btnPopup.addEventListener('click',()=>{
    formcontainer.classList.add('active')
});
iconClose.addEventListener('click', ()=>{
    formcontainer.classList.remove('active-popup')
});

 

       function one(){
        alert("Coupon Has applyed")
       }

