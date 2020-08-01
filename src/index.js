import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import cadastroVideo from './pages/cadastro/Video'
import cadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página não encontrada</div>)

ReactDOM.render(
  <BrowserRouter>
   <Switch>
     <Route path="/" component={App} exact  />
     <Route path="/cadastro/video" component={cadastroVideo}  />
     <Route path="/cadastro/categoria" component={cadastroCategoria}  />
     <Route  component={Pagina404} />
   </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
