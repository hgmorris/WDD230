
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
let newDateChamber = new Date().toLocaleDateString('en-us', options)

function toggleMenu(){
document.querySelector(".menu").classList.toggle('active');
document.querySelector("#menu-closed").classList.toggle('active');
document.querySelector("#menu-open").classList.toggle('active');
    }
    
    document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);


let message = document.querySelector("#message");
message.innerHTML = newDateChamber
console.log(message)

let text = document.lastModified;
document.querySelector("#Modification").textContent = text

if(newDateChamber.getDay() == 1 || newDateChamber.getDay() == 2) {
    message.style.display = "block"
} else {
    message.style.display = "none"
}