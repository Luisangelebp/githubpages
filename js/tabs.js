(function() {
    
    // Propiedades de tabs
    
    var propTabs = {
    
        primer_encabezado: document.getElementById('Encabezado').firstElementChild,
        primer_contenido: document.getElementById('container_menu').firstElementChild,
        enlaces_encabezado: document.querySelectorAll('#Encabezado li a'),
        li_encabezado:document.querySelectorAll('#Encabezado li'),
        divs_contenido: document.querySelectorAll('#container_menu > div'),
        contenido_activo:null,
    
    }
    
    //Metodos de tabs
    
    var metTabs = {
    
        inicio:function(){
    
            propTabs.primer_encabezado.className = 'active';
            propTabs.primer_contenido.className += 'active';
    
            for(var i = 0; i < propTabs.enlaces_encabezado.length; i++){
    
                propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
    
            }
    
        },
        evento:function(a){
    
            a.preventDefault();
    
            for (var i = 0; i < propTabs.li_encabezado.length;i++){
    
                propTabs.li_encabezado[i].className = '';
    
            }
    
            for ( var i = 0; i <propTabs.divs_contenido.length; i++ ){
    
                propTabs.divs_contenido[i].className = '';
    
            }
            this.parentElement.className = 'active';
            propTabs.contenido_activo = this.getAttribute('href');
    
            document.querySelector(propTabs.contenido_activo).className = 'active';
            document.querySelector(propTabs.contenido_activo).style.opacity = 0;
            setTimeout(function(){
                document.querySelector(propTabs.contenido_activo).style.opacity = 1;
            },100)
    
    
        }
    
    }
    metTabs.inicio();

}())