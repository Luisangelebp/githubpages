(function() {
    
    // propiedades slider Portada
    
    var propSliderPortada = {
    
        slider:document.getElementById('sliderP'),
        slide1:null,
        next: document.getElementById('next'),
        prev: document.getElementById('prev'),
        lastSlide:null,
        interval:null,
    }
    
    // Metodo slider Portada
    
    var metSliderPortada = {
    
        inicio:function(){
    
            propSliderPortada.slide1 = propSliderPortada.slider.firstElementChild;
            propSliderPortada.lastSlide = propSliderPortada.slider.lastChild;
            propSliderPortada.slider.insertBefore(propSliderPortada.lastSlide,propSliderPortada.slide1);
    
            propSliderPortada.interval = setInterval(metSliderPortada.moverSlide,5000)
    
            propSliderPortada.next.addEventListener('click',function(){
                propSliderPortada.slider.style.transition = 'all 1s ease'
                propSliderPortada.slider.style.marginLeft = '-100%';
                propSliderPortada.slide1 = propSliderPortada.slider.firstElementChild;
                propSliderPortada.slider.appendChild(propSliderPortada.slide1);
    
            })
    
    
            propSliderPortada.prev.addEventListener('click',function a (){
                propSliderPortada.slide1 = propSliderPortada.slider.firstElementChild;
                propSliderPortada.lastSlide = propSliderPortada.slider.lastChild;
                propSliderPortada.slider.insertBefore(propSliderPortada.lastSlide,propSliderPortada.slide1);
                propSliderPortada.slider.style.marginLeft = 0;
                
            })
    
        },
        moverSlide:function(){
            
            propSliderPortada.slider.style.transition = 'all 1s ease';
            propSliderPortada.slider.style.marginLeft = '-100%';
            
            setTimeout(function(){
                propSliderPortada.slide1 = propSliderPortada.slider.firstElementChild;
                propSliderPortada.slider.style.transition = 'unset';
                propSliderPortada.slider.appendChild(propSliderPortada.slide1);
                propSliderPortada.slider.style.marginLeft = 0;
                
            }, 1000)
        }
    
        
    
    }
    
    metSliderPortada.inicio();

} ())