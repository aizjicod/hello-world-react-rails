import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { getGreetings } from './redux/reducer/greetings';

store.dispatch(getGreetings())

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root'),
);