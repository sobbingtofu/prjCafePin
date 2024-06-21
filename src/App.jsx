import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/common/Globalstyle/';
import store from './redux/store';
import router from './routes/Router';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;