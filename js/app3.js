 // Cambio de lenguaje pagina post 2 //

        var check=document.querySelector(".check");
        check.addEventListener('click',idioma);
        
        function idioma(){
            let id=check.checked;
            if (id==true) {
                location.href="blog-post-2-es.html";
            }else{
                location.href="blog-post-2.html";
                }
            }