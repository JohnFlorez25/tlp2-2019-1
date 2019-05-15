#Cómo muestro información JS en mi HTML?

Cuando hacemos uso de javascript sin hacer uso de bibliotecas o masrcos de trabajo hemos podido crear elementos haciendo uso de la función
```
createElement
````
 
Esta función necesita un argumento para definir que tipo de elemento deseo crear
```javascript
const element = document.createElement('h1');
```
// 

Luego de crear el elemento defiminos el **contenido que deseo colocar en dicho elemento** 

```javascript
element.innerText = 'Hello , Guys!';
```

Ahora, debemos preguntarnos, **donde deseo poner este contenido?** es la otra parte que debemos identificar, es decir debemos ubicar el ID del contenedor donde va ser mostrada dicha información, es la etiqueta `<div>`que está en nuestro archivo index.html

```html
<div id="app"></div>
```
Creamos dicho contenedor.

```javascript
const container = document.getElementById('app');
```

Finalmente, **que queremos añadir?** al crear el contenedor el estaría esperando agegar el elemento, hacemos uso de la función `appendChild`

```javascript
container.appendChild(element)
```