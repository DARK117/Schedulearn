const NavToggle = document.querySelector(".Nav-Toggle")
const NavMenu = document.querySelector(".Nav-Menu")

NavToggle.addEventListener("click", () =>{
    NavMenu.classList.toggle("Nav-Menu-Visible");

    if(NavMenu.classList.contains("Nav-Menu-Visible")){
        NavToggle.setAttribute("aria-label", "Cerrar menú");
    }else{
        NavToggle.setAttribute("aria-label", "Abrir menú");
    }

});