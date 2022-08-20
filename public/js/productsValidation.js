<<<<<<< HEAD
window.onload = function () {
  let form = document.querySelector("#form");
=======
window.addEventListener("load", function (){
    
    let form = document.querySelector('.form');
    form.name.focus();
    form.addEventListener('submit', (e) => {
        
        let errors = [];
>>>>>>> df71209e41bb4e60d5cfe72a1947755c09ffef19

  form.addEventListener("submit", (e) => {
    e.preventDefault();

<<<<<<< HEAD
    let errors = [];
=======
        if (name.value == '' ) {
            errors.push('El nombre no puede estar vacio');
            if(name.value.length > 3){
                errors.push('El nombre tiene que ser mayor a 3 caracteres');
            }
        } else {
            form.price.focus();
        };
        if (price.value > 0) {
            errors.push('El precio no puede ser 0');
        } else {
            form.description.focus();
        };
        if (description.value == '') {
            errors.push('El producto debe tener una descripcion');
        }
        
        
        
>>>>>>> df71209e41bb4e60d5cfe72a1947755c09ffef19

    let name = document.querySelector("#name");
    let price = document.querySelector("#price");
    let description = document.querySelector("#descripcion");

    if (name.value == "") {
      errors.push("El nombre no puede estar vacio");
    }
    if (price.value <= 0) {
      errors.push("El precio no puede ser 0");
    }
    if (description.value == "") {
      errors.push("El producto debe tener una descripcion");
    }

    console.log(errors);

    if (errors.length > 0) {
      let losErrores = document.querySelector("#errors");
      losErrores.innerHTML = "";
      for (let i = 0; i < errors.length; i++) {
        losErrores.innerHTML += `<li>${errors[i]}</li>`;
      }
    } else {
      form.submit();
    }
  });
};
