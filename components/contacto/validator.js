const formulario = document.getElementById('formulario');
const email = document.getElementById('email');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  if (validator.isEmail(email.value)) {
      alert('Correo electrónico enviado correctamente');
      formulario.reset();
    } else {
        alert('Ingrese un correo electrónico válido');
    }
});