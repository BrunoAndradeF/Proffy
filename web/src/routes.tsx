import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} /> {/* react-router-dom  verifica apenas se o path esta contido na url atual, com o exact faz um teste de igualdade*/}
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes; 