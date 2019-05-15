# React #

***¿Qué es?***
Se dice que React es una biblioteca escrita en JavaScript se genera cierta incertidumbre si es en esencia una biblioteca ya se evidencia IoC (Inversión del control) aspecto fundamental al definir un marco de trabajo ya que en muchos aspectos al usar React sabemos que sucede pero no cuando.

React es desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.

React.js está construido en torno a hacer funciones, que toman las actualizaciones de estado de la página y que se traduzcan en una representación virtual de la página resultante. Siempre que React es informado de un cambio de estado, vuelve a ejecutar esas funciones para determinar una nueva representación virtual de la página, a continuación, se traduce automáticamente ese resultado en los cambios del DOM necesarios para reflejar la nueva presentación de la página.

React utiliza el llamado HTML virtual DOM, el cual se renderiza mucho más rapido que el HTML tradiccional ya que no se calculan sus estilos CSS. Cuando el virtual DOM cambia se genera uno nuevo y se calcula las diferencias con el anterior virtual DOM. Por último React genera los cambios pertinentes en el HTML.

***Conceptos***

**DOM**
>El DOM es un API de programación para documentos. Guarda una gran similitud con la estructura del documento al que modeliza. Por ejemplo, considérese esta tabla, tomada de un documento HTML:

```html
      <TABLE>
      <TBODY> 
      <TR> 
      <TD>Shady Grove</TD>
      <TD>Aeolian</TD> 
      </TR> 
      <TR>
      <TD>Over the River, Charlie</TD>        
      <TD>Dorian</TD> 
      </TR> 
      </TBODY>
      </TABLE>
    
```
![alt-text](https://www.w3.org/2002/07/table.png)

**Componentes**
>Un componente en react es un pedazo de nuestra vista por ejemplo la navbar esta se encapsula en un componente y esto te da la capacidad de poder reutilizarlo las veces que sea necesraio sin necesidad de volver a escribir código.

##**Mi primer react-app**
>Importante: Recuerda que debes tener instalado NodeJs para que puedas crear tu primera app react, para hacer uso del comando npm, React también se puede instalar haciendo uso de `npx`o `yarm`
>
Para crear nuestra primera aplicación en react debemos hacer uso de `create-react-app` lo primero que debemos hacer es instalar create-react-app de manera global:

`npm install -g create-react-app``

Una vez instalado podemos hacer uso de create-react-app para crear el directorio/carpeta donde va existir nuestra app react:

`npm create-react-app mi-app-react`

Nos ubicamos en la carpeta creada:

`cd mi-app-react`

y copiamos la siguiente línea de código para correr nuestra primera app en react!!

`npm start`

>Recuerda: Todo esto debe realizarse haciendo uso de la Terminal
>

***Quiero saber mas...***

https://facebook.github.io/create-react-app/docs/getting-started

(https://desarrolloweb.com/articulos/que-es-react-motivos-uso.html)

(https://devcode.la/blog/como-funciona-reactjs/)

(https://platzi.com/blog/react-js-de-javascript/)

(https://frostqui.github.io/react-componentes)

(https://medium.com/@shmesa23/ciclos-de-vida-de-los-componentes-de-react-e1bf48a5ff73)