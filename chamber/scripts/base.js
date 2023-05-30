
let newDateChamber = new Date()

// function toggleMenu(){
// document.querySelector(".menu").classList.toggle('active');
// document.querySelector("#menu-closed").classList.toggle('active');
// document.querySelector("#menu-open").classList.toggle('active');
//     }
    
//     document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);


let message = document.querySelector("#message");
console.log(message)
if(newDateChamber.getDay() == 1 || newDateChamber.getDay() == 2) {
    message.style.display = "block"
} else {
    message.style.display = "none"
}