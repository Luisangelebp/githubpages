
    window.addEventListener('load', function() {
        // Propiedades de Scroll
        
        var propScroll = {
        
            position: null,
            scroll_suave: document.getElementsByClassName('scroll-abajo'),
            volver_arriba: document.getElementsByClassName('volver-arriba'),
            destino:null,
            seccion_distancia:null,
            intervalo:null,
        
        }
        
        // Metodos de Scroll
        
        var metScroll = {
        
            inicio:function(){
        
                for(var i=0;i<propScroll.scroll_suave.length;i++){
        
                    propScroll.scroll_suave[i].addEventListener('click',metScroll.moverse);
        
                }
        
                for(var i=0;i<propScroll.volver_arriba.length;i++){
        
                    propScroll.volver_arriba[i].addEventListener('click',metScroll.volver);
        
                }
            },
            moverse:function(e){
                
                e.preventDefault();
                clearInterval(propScroll.intervalo  );
                propScroll.destino = this.getAttribute('href');
                propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94;
        
                propScroll.position = window.pageYOffset;
        
                propScroll.intervalo = setInterval(function(){
        
                    if (propScroll.position < propScroll.seccion_distancia){
        
                        propScroll.position += 30;
        
                        if (propScroll.position >= propScroll.seccion_distancia){
                            clearInterval(propScroll.intervalo);
                        }
        
                    }else {
        
                        propScroll.position -= 30;
        
                    }
                    window.scrollTo(0,propScroll.position)
        
                    // el metodo scrollTo(x,y) nos mueve a esa posicion en la pagina
                    
        
                },15)
        
            },
            volver: function(e){
                e.preventDefault();
                clearInterval(propScroll.intervalo)
                propScroll.position = window.pageYOffset;
                propScroll.intervalo = setInterval(function(){
        
                    if(propScroll.position > 0 ){
        
                        propScroll.position -= 30;
        
                        if (propScroll.position <= 0){
                            clearInterval(propScroll.intervalo);
                        }
        
                    }else{
                        return;
                    }
        
                    window.scrollTo(0, propScroll.position)
        
                },15)
        
            }
        
        }
        
        metScroll.inicio();

    })

