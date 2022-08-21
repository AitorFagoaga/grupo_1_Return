window.onload = function () {
  let form = document.querySelector("#form");
  form.name.focus();
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = [];

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
