import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
const mockStore = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  store = mockStore(initialState);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
