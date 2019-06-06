#Ciclo de vida de un Componente
Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

1. Montaje:
- Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: constructor, render, componentDidMount.

2. Actualización:
- Ocurre cuando los props o el estado del componente cambian.
Se llaman dos métodos: render, componentDidUpdate.

3. Desmontaje:
- Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: componentWillUnmount.

##Resumen de ciclo de vida
1.  Montaje.- Indica que React esta introduciendo el código al DOM HTML.
Cuando ocurre el montaje va ocurrir de 3 métodos:

- Constructor (inicializar valores ejem: states, variables, etc)
- Render (React calculara lo que el elemento representa este componete y lo introducirá al código)
- componentDidMount (Cuando el render ejecuta el elemento, el componentDidMount lo mostrará en pantalla)

2. Actualización.- Ocurre cuando los props o los State’s del componente cambian, y esto llama 2 métodos:

- Render (Se debe renderizar cada vez que los valores del componente cambian).
- componentDidUpdate (React llama como señal componentDidUpdate que recibe 2 argumentos, los props y el State que tenia antes. Ejemplo: Esto podria servir para comparar entre la version anterior y actual del componente)

3. DesMontaje.- Cuando el componete sale de escena (ejemplo: Cuando cambias de pagina,perfecto para limpiar recursos
Llama un método:
**Quitar contenido, para presentar nuevo contenido.**
- componentWillUnmount (Es el lugar correcto para liberar recursos)