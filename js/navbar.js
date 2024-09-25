document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
      <nav id="navbar" class="navbar">
        <div class="logo">
          <a href="/"><img src="../images/logo.jpg" alt="Logo" class="logo-img"></a>
        </div>
        <ul class="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="../enlaces/productos.html">Productos</a></li>
          <li><a href="../enlaces/sobreMi.html">Sobre mi</a></li>
          <li><a href="../enlaces/contacto.html">Contactame</a></li>
          <li><a href="https://www.instagram.com/dtejidosetrata/?hl=es-es" target="_blank">Instagram</a></li>
          <li><a href="https://www.facebook.com/tu_perfil" target="_blank">Facebook</a></li>
        </ul>
      </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbar);
  });
  