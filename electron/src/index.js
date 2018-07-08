import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './components/chatroom/app';
import Home from './components/front-page/home';
import 'bootstrap';
import './styles/styles.scss';

const AppRouter = () => {
  return (
    <AlertProvider template={AlertTemplate} >
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/room/:id' component={App} />
        </Switch>
      </HashRouter>
    </AlertProvider>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));