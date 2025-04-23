const formulario = document.getElementById('formulario-contacto');
const mensaje = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(formulario);

  try {
    const response = await fetch(formulario.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      mensaje.classList.remove('hidden');
      formulario.reset();
    } else {
      const errorData = await response.json();
      console.error('Error al enviar:', errorData); // 👈 Esto mostrará el error real
      alert('Hubo un problema al enviar el mensaje. Revisa la consola para más detalles.');
    }
  } catch (error) {
    console.error('Error de red:', error);
    alert('Error de conexión. Inténtalo más tarde.');
  }
});
