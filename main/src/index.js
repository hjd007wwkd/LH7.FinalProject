import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/app';
import Home from './components/home';
import 'bootstrap';
import './styles/styles.scss';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/room/:id' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));