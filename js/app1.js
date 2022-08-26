// Cambio de lenguaje pagina cursos //

var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if (id==true) {
        location.href="cursos.html";
    }else{
        location.href="courses.html";
        }
    }