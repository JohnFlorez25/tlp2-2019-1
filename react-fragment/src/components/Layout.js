import React from 'react'

import NavBar from '../components/NavBarComponent'

const Layout = (props) =>{
    // Este layout yo quiero que tenga contenido propio, que sea parte del layout,
    // pero que tambien tenga contenido interno, para que esto pueda suceder necesito,
    // usar un prop especial llamado CHILDREN
    return (
        // Debemos preguntarnos que tenemos div forzados que no tienen estilos, ni props,
        // ni ningun estilo, recordemos que debemos tener un elemento de etiqueta,
        // ya que siempre que regrasamos DEBO REGRESAR UN UNICO ELEMENTO, la forma para,
        // evitarlo es React.fragment me permite regresar mas de un elemento pero parece uno
        <React.Fragment>
            <NavBar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;