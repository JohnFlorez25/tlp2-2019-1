import React from 'react'
// Este componente lo hacemos ligeramente diferente,
// los componente pueden ser clases o funciones
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home';
import ProfileNew from '../pages/ProfileNew';
import Profiles from '../pages/Profiles'
import NotFound from '../pages/NotFound'
function App(){
    return (
        <BrowserRouter>
            {/* colocamos las rutas */}
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/profiles/new" component={ProfileNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;