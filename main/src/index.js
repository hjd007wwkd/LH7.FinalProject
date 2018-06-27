import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/styles.scss';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={App} />
          <Route path='/room' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));