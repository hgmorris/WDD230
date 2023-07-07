
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
let newDateChamber = new Date();
let datestring = newDateChamber.toLocaleDateString('en-us', options)

function toggleMenu(){
document.querySelector(".menu").classList.toggle('active');
document.querySelector("#menu-closed").classList.toggle('active');
document.querySelector("#menu-open").classList.toggle('active');
    }
    
    document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);


let message = document.querySelector("#message");
message.innerHTML = datestring
console.log(message)

let text = document.lastModified;
document.querySelector("#Modification").textContent = text

if(newDateChamber.getDay() == 1 || newDateChamber.getDay() == 2) {
    message.style.display = "block"
} else {
    message.style.display = "none"
}

let linkSelector = document.querySelector('.menu');

linkSelector.addEventListener('click', () => {
    if (!linkSelector.classList.contains('active')) {
      listSelector.classList.add('active');
      alert("hello")
    }else{
      listSelector.classList.remove('active');
    }
  });