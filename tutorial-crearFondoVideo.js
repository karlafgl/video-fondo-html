
//TUTORIAL COMO CREAR PAGINA CON VIDEO DE FONDO BACKGROUND

1.- descargamos el video que necesitamos en: https://videos.pexels.com/videos/view-of-sun-setting-down-856711

2.- creamos nuestro entorno de trabajo.
3.- en nuestro index.html colocamos nuestro titulo y creamos etiqueta header
4.- Daremos unas clases para estilizarlo, header esta encargado de estiliza esta seccion
    mientras que el content esta encargado de estilos generales como centrar el contenido.
5.- cuando coloquemos nuestro video en html Recuerda poner AUTOPLAY
6.- Para reproducirlo continuamente colocar LOOP.

<div class="header-video">
  <video src="video/playaonmove.mp4" autoplay loop></video>
</div>

Example:
    //primer seccion del video que estara al FONDO
    <header class="header content">
      <div class="header-video">
        <video src="video/playaonmove.mp4" autoplay loop></video>
      </div>
    //segunda seccion donde colocamos una capa transparente
      <div class="header-overlay"></div>

    //tercera seccion donde colocamos contenido
      <div class="header-content">
        <h1>Web</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptate!</p>
        <a href="#" target="_blank"></a>
      </div>
    </header>

7.- Agregar los estilos en css 
