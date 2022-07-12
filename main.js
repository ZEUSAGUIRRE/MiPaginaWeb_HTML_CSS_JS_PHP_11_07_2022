addEventListener("DOMContentLoaded", ()=>{
    
    document.querySelector("#modal").addEventListener("click", (e)=>{
        document.querySelector(".modal").showModal();
    })
    document.querySelector(".boton").addEventListener("click", (e)=>{
        document.querySelector(".modal").close()
    })

})