const btnizq = document.querySelector(".btn-izq "),
    btnder = document.querySelector(".btn-der"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

    btnizq.addEventListener("click", e =>moveToLeft())
    btnder.addEventListener("click", e =>moveToRight())

    setInterval(() =>{
        moveToRight()

    },20000);

    let operacion =0,
    contador =0,
    Anchoimagen = 100/ sliderSection.length;
    
    function moveToRight(){
        if(contador >= sliderSection.length-1){
            contador=0;
            operacion=0;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s"
            return;
        }
        contador ++;
        operacion = operacion + Anchoimagen;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
    }
    function moveToLeft(){
        contador --;
        if(contador< 0){
            contador = sliderSection.length-1;
            operacion= Anchoimagen * (sliderSection.length-1)
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s"
            return;
        }
        operacion = operacion - Anchoimagen;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"



    }