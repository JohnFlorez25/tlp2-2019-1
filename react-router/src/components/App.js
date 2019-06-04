import React from 'react'
// Este componente lo hacemos ligeramente diferente,
// los componente pueden ser clases o funciones
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProfileNew from '../pages/ProfileNew';
import Profiles from '../pages/Profiles'
function App(){
    return (
        <BrowserRouter>
            {/* colocamos las rutas */}
            <Switch>
                <Route exact path="/profiles" component={Profiles} />
                <Route path="/profiles/new" component={ProfileNew} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;