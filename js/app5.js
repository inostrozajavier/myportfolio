 // Cambio de lenguaje pagina post 4 //

 var check=document.querySelector(".check");
 check.addEventListener('click',idioma);
 
 function idioma(){
     let id=check.checked;
     if (id==true) {
         location.href="blog-post-4-es.html";
     }else{
         location.href="blog-post-4.html";
         }
     }