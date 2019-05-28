#Manejando Estados

Hasta ahora todos los componentes han obtenido su información a través de `props` que vienen desde afuera _(otros componentes)_ pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. 

**La clave está en que la información del `state` a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.**

Para guardar la información en el estado se usa una función de la clase `component` llamada `setState` a la cual se le debe pasar un objeto con la información que se quiere guardar.

Aunque no se ve, la información está siendo guardada en dos sitios. Cada `input` guarda su propio valor y al tiempo la está guardando en `setState`, lo cual no es ideal. Para solucionarlo hay que modificar los **inputs de un estado de no controlados a controlados.**

##Levantar el Estado
Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como `props` a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de **“reactivo”** ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.