window.onload = function () {
    let form = document.querySelector(".form-register");
    form.name.focus();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let errors = [];
  
      let name = document.querySelector(".name");
      let category = document.querySelector(".category");
      
  
      if (name.value == "") {
        errors.push("El nombre no puede estar vacio");
      }
      if (category.value == "") {
        errors.push("Debes de elegir una categoria");
      }
  
      if (errors.length > 0) {
        let losErrores = document.querySelector(".errors");
        losErrores.innerHTML = "";
        for (let i = 0; i < errors.length; i++) {
          losErrores.innerHTML += `<li>${errors[i]}</li>`;
        }
      } else {
        form.submit();
      }
    });
  };
  