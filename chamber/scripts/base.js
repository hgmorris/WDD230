function toggleMenu(){
document.querySelector(".menu").classList.toggle('active');
document.querySelector("#menu-closed").classList.toggle('active');
document.querySelector("#menu-open").classList.toggle('active');
    }
    
    document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);