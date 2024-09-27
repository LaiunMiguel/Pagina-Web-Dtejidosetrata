document.addEventListener('DOMContentLoaded', function() {
  const navbar = `
    <nav id="navbar" class="navbar">
      <div class="logo">
        <a href="../"><img src="../images/logo.jpg" alt="Logo" class="logo-img"></a> <!-- Ruta relativa desde un subdirectorio -->
      </div>
      <ul class="nav-links">
        <div>
        <li><a href="../">Inicio</a></li>
        </div>
        <div>
        <li><a href="../enlaces/productos.html">Productos</a></li>
        </div>
        <div>
        <li><a href="../enlaces/sobreMi.html">Sobre mi</a></li>
        </div>
        <div>
        <li><a href="../enlaces/contacto.html">Contactame</a></li>
        </div>
        <div>
        <li><a href="https://www.instagram.com/dtejidosetrata/?hl=es-es" target="_blank">Instagram</a></li>
        </div>
      </ul>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navbar);
});

  