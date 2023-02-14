const form  = document.querySelector('#submit');

form.addEventListener('submit', function (event) {

    const correo = form.elements['email'];

    let adress = correo.value;

    confirm("Correo registrado correctamente: " + "\nEmail: " + adress);
});