
    const usuario=document.getElementById('username')
    const contraseña=document.getElementById('password')
    const mensaje=document.querySelector('div')
    const recordar= document.getElementById('recordarme')




document.getElementById('ingresar').addEventListener('click',evento=>
{evento.preventDefault()



    if(usuario.value===''|| contraseña.value==='')

    {
     error()

    }


    if(usuario.value==='ranger' && contraseña.value==='12345678'){

        alert('bienvenido')
        setTimeout(()=>{

            window.location.href='./page.html'

        },2000)
     
    }

    else{

        error()
    }




})

contraseña.addEventListener('mouseenter', (contra)=>{
    contra.target.type='text'
})


contraseña.addEventListener('mouseout', (contra)=>{
    contra.target.type='password'
})


function error(){
    mensaje.style.display='block'

    setTimeout(()=>
    {
        mensaje.style.display='none'




    },3000)

}


recordar.addEventListener('change',()=>{
 
    if(recordar.checked){

        alert('vamos a recordarte')
    }


})