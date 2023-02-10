(function() {
    
    //Propiedades Slider
    
    var propSlider = {
    
        slider: document.getElementById('sliderN_T'),
        slide1:null
    
    }
    
    //Metodos de slider
    
    var metSlider = {
    
        inicio:function(){
            setInterval(metSlider.slider,3000);
        },
        slider: function(){
    
            propSlider.slider.style.transition = 'all 1s ease';
            propSlider.slider.style.marginLeft = '-100%';
    
            setTimeout(function(){
                propSlider.slide1 = propSlider.slider.firstElementChild;
                propSlider.slider.style.transition = 'unset';
                propSlider.slider.appendChild(propSlider.slide1);
                propSlider.slider.style.marginLeft = '0'
            },1000)
    
        }
    
    }
    metSlider.inicio()

}())