

const pedir=document.querySelector('.pedir')
const modal=document.querySelector('.modal')
const lista=document.querySelector('#lista')
const cancelar=document.querySelector('.cancelar')
const aceptar=document.querySelector('.aceptar')
const modalproducto=document.querySelector('.modal-producto')
const regreso=document.querySelector('.regreso')
const modal2=document.querySelector('.modal2')
const volver=document.querySelector('.volver')





pedir.addEventListener('click',()=>{

    if(lista.selectedIndex==0){

        alert('no escogiste nada')
    }
    
    else{

    modal.style.top=0
    modalproducto.textContent=lista.options[lista.selectedIndex].text

    }

})

cancelar.addEventListener('click',()=>{


    modal.style.top='-100vh'
    lista.selectedIndex='0'
})


aceptar.addEventListener('click',()=>{

    modal2.style.top=0
    modal.style.top='-100vh'
  

    
})


regreso.addEventListener('click',()=>{

    location.href='./index.html'

})


volver.addEventListener('click',()=>{


    location.href='./page.html'


})



