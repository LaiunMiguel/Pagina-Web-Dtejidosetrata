document.addEventListener('DOMContentLoaded', function() {
  const navbar = `
    <header>
      <nav id="navbar" class="navbar">
        <div class="logo">
          <a href="../"><img src="../images/logo.jpg" alt="Logo" class="logo-img"></a> <!-- Ruta relativa desde un subdirectorio -->
        </div>
        <ul class="nav-links">
          <li><a href="../">Inicio</a></li>
          <li><a href="../enlaces/productos.html">Productos</a></li>
          <li><a href="../enlaces/sobreMi.html">Sobre mí</a></li>
          <li><a href="../enlaces/contacto.html">Contáctame</a></li>
          <li><a href="https://www.instagram.com/dtejidosetrata/?hl=es-es" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </nav>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', navbar);
});

  