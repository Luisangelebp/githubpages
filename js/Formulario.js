(function(){
    
    // Propiedades de Formulario
    
    var propFormulario = {
    
        formulario: document.formulario_contact,
        elementos: document.formulario_contact.elements,
        error:null,
        textError:null,
    
    } 
    
    // Metodos de Formulario
    
    var metFormulario = {
    
        inicio:function(){
    
            for (var i=0;i<propFormulario.elementos.length;i++){
    
                if ( propFormulario.elementos[i].type == "text" || propFormulario.elementos[i].type == "email" || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'){
    
                    propFormulario.elementos[i].addEventListener('focus',metFormulario.focusForm);
                    propFormulario.elementos[i].addEventListener('blur',metFormulario.blurForm);
    
                }
    
                propFormulario.formulario.addEventListener('submit',metFormulario.validarInputs);
    
            }
    
        },
        focusForm:function(){
    
            this.parentElement.children[1].className = 'label active';
    
    
        },
        blurForm:function(){
    
            if (this.value == '') {
                this.parentElement.children[1].className = 'label'
                
            }
    
        },
        validarInputs:function(eve){
    
            for (var i = 0; i < propFormulario.elementos.length; i++){
    
                if ( propFormulario.elementos[i].value == ''){
    
                    eve.preventDefault()
    
                    if(propFormulario.elementos[i].parentElement.children.length < 3){
    
                        propFormulario.error = document.createElement('p');
                        propFormulario.textError = document.createTextNode('Por favor rellenar el campo con su ' + propFormulario.elementos[i].name);
                        propFormulario.error.appendChild(propFormulario.textError);
                        propFormulario.error.className = 'error';
        
                        propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
    
                    }
    
    
    
                }else{
    
                    if(propFormulario.elementos[i].parentElement.children.length >= 3){
    
                        propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                        propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
    
                    }
    
                }
    
            }
    
        }
    
    }
    metFormulario.inicio()

}())