import React from 'react';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import Login from './pages/Login';
import CadastraRegistro from './pages/CadastraRegistro';
import Registros from './pages/Registros';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/novo' component={CadastraRegistro} />
                <Route path='/editar/:id' component={CadastraRegistro} />
                <Route path='/registros' component={Registros} />
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    );
}