window.addEventListener("load", function (){
    
    let form = document.querySelector('.form');
    //form.titulo.focus();
    form.addEventListener('submit', (e) => {
        
        let errors = [];

        let name = document.querySelector('#name')
        let description = document.querySelector('#description');
        let price = document.querySelector('#price');

        if (name.value == '' ) {
            errors.push('El nombre no puede estar vacio');
            if(name.value.length > 3){
                errors.push('El nombre tiene que ser mayor a 3 caracteres');
            }
        } else {
            form.price.focus();
        };
        if (price.value < 0) {
            errors.push('El precio no puede ser 0');
        } else {
            form.description.focus();
        };
        if (description == "") {
            errors.push('El producto debe tener una descripcion');
        }
        
        
        

        if (errors.length > 0) {
            e.preventDefault();
            let losErrores = document.querySelector('.errors');
            losErrores.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                losErrores.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        }else{
            alert('Todo ok')
            form.submit();
        }

    });


})

