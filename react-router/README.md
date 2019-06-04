#Introducción a React Router

Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería **Open Source**.

__Multi Page Apps__: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

__Single Page Apps (SPA)__: Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

__React Router (v4)__: Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

1. **_BrowserRouter_**: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.

2. **_Route_**: Cuando hay un match con el +path+, se hace render del +component+. El component va a recibir tres props: match, history, location.

3. **_Switch_**: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.

4. **_Link_**: Toma el lugar del elemento `<a>`, evita que se recargue la página completamente y actualiza la URL.

##Instalar React Router
Para instalar React Router lo hacemos desde la terminal con `npm install react-router-dom`. Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

Link internamente tiene un elemento pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.