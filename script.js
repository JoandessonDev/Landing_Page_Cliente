function openModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar' || e.target. id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {    
    console.log(window.innerWidth)
    let mobile_photos = [
        "Mobile1.png",
        "Mobile1b.png",
        "Mobile2a.png",
        "Mobile2.png",
        "Mobile2b.png",
        "Mobile3.png",
        "Mobile3b.png",
    ]
    let div_elements = document.querySelectorAll("#desktop-itens .carousel-item img") 
    if (window.innerWidth <= '768') {
        for (i in div_elements) {
            div_elements[i].src = mobile_photos[i];
        }
    }
})
