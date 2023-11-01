function handleClick(){
    document.getElementById("myNav").style.width ='30%'
}

function closeNav(){
    document.getElementById("myNav").style.width ='0'

}

const galeriaModal =document.querySelector(".galeria-modal")
const imgGaleriaModal =document.querySelector(".galeria-modal img")

function fecharGaleria(){
    galeriaModal.style.visibility = "hidden";
    imgGaleriaModal.style.transform = "scale(0)";
}

function abrirGaleria(src){
    galeriaModal.style.visibility = "visible";
    imgGaleriaModal.style.transform = "scale(1)";
    imgGaleriaModal.src = src
}
