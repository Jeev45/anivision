const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
 setTimeout(function(){
   loginPopup.classList.add("show");
 },9000)

})

function showPopup(){
      const timeLimit = 9 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})


const popupScriptURL = 'https://script.google.com/macros/s/AKfycbwUToW1sxwXp394oB2FAKS6n0tCbaZ0BaPKpCI83FYgfIoJF71WnOggig3aAiq_U2GX_g/exec';
const popupForm = document.querySelector('.login-popup form');

popupForm.addEventListener('submit', e => {
    e.preventDefault(); 

    const submitButton = popupForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    fetch(popupScriptURL, { method: 'POST', body: new FormData(popupForm) })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your form has been submitted successfully.");
                popupForm.reset(); 
            } else {
                alert("There was an issue submitting the form. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("An error occurred while submitting the form. Please try again later.");
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit';
        });
});
