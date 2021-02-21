import { Provider } from 'react-redux';
import store from 'state/store';
import 'styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
