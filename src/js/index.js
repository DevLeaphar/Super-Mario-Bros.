alert("Este site foi feito com o objetivo de aprender e se apronfudar nas linguagens básicas da programação, espero que gostem do meu trabalho! ;)");
    
    console.log('mostrar o document', document);

    console.log(document.querySelector(".botao-trailer"));

    const botaoTrailer = document.querySelector(".botao-trailer");

    console.log(botaoTrailer);
    
    botaoTrailer.addEventListener("click", ()=> {
        modal.classList.add("aberto");
        video.setAttribute("src", linkDoVideo)
    })

     const modal = document.querySelector(".modal");

     const botaoFecharModal = document.querySelector(".fechar-modal");
     botaoFecharModal.addEventListener("click", ()=>{
        modal.classList.remove("aberto");
        video.setAttribute("src", "");
     });



     const video = document.getElementById("video");
     console.log(video.src);
     const linkDoVideo = video.src;
     