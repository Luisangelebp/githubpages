(function() {

    // Propiedades de lightbox

    var propLightbox = {

        imgcontainer: document.getElementsByClassName('lightbox'),
        imagen:null,
        imagensrc:null,
        bodyDOM: document.getElementsByTagName('body')[0],
        lightbox_container:null,
        modal:null,
        cerrar_modal:null,
        animation:'fade',

    }

    // Metodos de lightbox

    var metlightbox = {

        inicio:function(){

            for(var i=0;propLightbox.imgcontainer.length;i++){
                propLightbox.imgcontainer[i].addEventListener('click',metlightbox.capturaImagen);
            }
        },
        capturaImagen:function(){
            propLightbox.imagen = (this);
            metlightbox.lightbox(propLightbox.imagen);
        },
        lightbox:function(image){

            propLightbox.imagensrc = window.getComputedStyle(image, null).backgroundImage.slice(5,-2);
            propLightbox.bodyDOM.appendChild(document.createElement('DIV')).setAttribute('id','lightbox_container');
            propLightbox.lightbox_container = document.getElementById('lightbox_container');
            propLightbox.lightbox_container.style.width = '100%';
            propLightbox.lightbox_container.style.height = '100%';
            propLightbox.lightbox_container.style.position = 'fixed';
            propLightbox.lightbox_container.style.zIndex = '1000';
            propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
            propLightbox.lightbox_container.style.top = '0';
            propLightbox.lightbox_container.style.left = '0';

            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id','modal');

            propLightbox.modal = document.getElementById('modal');

            propLightbox.modal.style.height = '90%';
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src',propLightbox.imagensrc);

            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class','imagen-modal');

            if (propLightbox.animation == 'fade'){
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
    
                setTimeout(function(){document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;},50)
    
            }

            if (propLightbox.animation == 'slide'){
                document.getElementsByClassName('imagen-modal')[0].style.transform = 'translate(-200%, -50%)';
    
                setTimeout(function(){document.getElementsByClassName('imagen-modal')[0].style.transform = 'translate(-50%, -50%)';},50)
    
            }

            propLightbox.modal.innerHTML += '<svg id="cerrar-modal" width="45px" height="45px" viewBox="0 0 45 45"><image width="45px" height="45px" xlink:href="img/xmark-solid.svg"></image></svg>';

            propLightbox.cerrar_modal = document.getElementById('cerrar-modal');
            propLightbox.cerrar_modal.addEventListener('click',metlightbox.cerrarModal);

        },
        cerrarModal:function(){

            propLightbox.bodyDOM.removeChild(propLightbox.lightbox_container);

        }

    }

    metlightbox.inicio();

}())