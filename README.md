# MIRA Red Social

![MIRA](src/images/logo-removebg-preview.png)


MIRA es una red social que se creó pensando en aquellas personas, que disfrutan de series y peliculas y frente a la gran oferta que existe en diversas plataformas buscan tener referencias si lo que pretenden ver se adecua realmente a sus intereses, para ello necesitan reseñas y opiniones de otros usuarios. Además permite a los usuarios postear sobre estrenos, novedades, buscar aquella pelicula de la cual "no recuerdan el nombre", comentar teorias sobre finales abiertos, entre otras.

## PLANIFICACIÓN

Nuestra planificación se encuentrada detallada en un excel en donde se organizo el proyecto por objetivos de trabajo basados en las Historias de Usuarios.

## HISTORIAS DE USUARIOS

### 1) COMO usuario de una red social  QUIERO registrarme en la página PARA poder ingresar a la comunidad y compartir reseñas de las peliculas y series que he visto, como tambien buscar información de las que quiero ver.

_Criterios de Aceptación:_

*	Permitir al usuario el ingreso de un correo electrónico.
*	Mostrar mensaje de error si no ingresa un correo electrónico.
*	Permitir al usuario el ingreso de la contraseña.
*	Mostrar mensaje de error si la contraseña no se cumple con el mínimo de 6 caracteres.
*	Se permite hacer click en botón "Crear cuenta" para validar los datos del registro.
*	Mostrar mensaje donde se informa que ha sido enviado un correo a su cuenta confirmando el registro.


### 2) COMO alguien que quiere participar activamente en la red social  QUIERO ingresar en la página, a través mi cuenta de google o Facebook  PARA poder ingresar de manera más rápida a la comunidad.

_Criterios de Aceptación:_

*	Permitir hacer click al botón "Ingresa con ".
*	Se mostrará mensaje de verificación de los permisos por parte de GOOGLE o Facebook

### 3) COMO usurio QUIERO postear sobre las peliculas que ví, dar like a las publicaciones que me gustan PARA interactuar con otros usuarios.

_Criterios de Aceptación:_

* Poder publicar un post.
* Que pueda dar y quitar like a los post, uno por usuario.
* Que se pueda visivilizar un conteo de los likes.

### 4) COMO usuario de una red social QUIERO poder editar o eliminar mis post PARA tener mayor control de mi interacción en la red social.

_Criterios de Aceptación:_

* Poder eliminar un post especifico.
* Pedir confirmación antes de eliminar un post.
* Al dar click para editar un post, debe cambiar el input que permita editar y guardar los cambios.
* Al recargar la página debo de poder ver los textos editados.

## CONSIDERACIONES TÉCNICAS

* La lógica del proyecto fue implementada usando JS, HTML y CSS.
* La app cuenta con multiples vistas (Single Page Application (SPA)), gestionadas por un archivo (router.js) que permite su visualización, dependiendo de las elecciones del usuario.
* Sitio responsive, (mobile first), usando flexbox, grid layout y media queries para celulares y tablets
* Se usó [Firebase](https://firebase.google.com/) como plataforma de desarrollo.
* Se recibió _code review_ de al menos una compañera de otro equipo.
* Se realizaron testeos del producto manualmente.
* Se realizaron  _pruebas_ de usabilidad y el _feedback_ del usuario fue incorporado.
* Deploy del proyecto.
-+
## PROTOTIPADO

Una vez identificado el problema y el tipo de usuario, se procedió a diseñar la plataforma en distintos formatos.

## Prototipo de baja fidelidad:

![baja](src/images/propoBaja.jpg)

## Prototipo de alta fidelidad (Figma):
https://www.figma.com/file/EmztTJd6TLyGL9t3UfGohS/Red-Social?node-id=178%3A63

Inicio y Registro de Usuario:

![FIGMA1](src/images/loginFigma.png)

![figma2](src/images/registroFigma.png)


Muro:

![figma2](src/images/homeFigma.png)


### FUTURAS MEJORAS

* Implementar funcionalidad al boton de editar
* Implemnetar uso de librerias Mock
### DESARROLLADORAS

Javiera Herrera

Emmi Raffo

Karinna Sepúlveda