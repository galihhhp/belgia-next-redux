import { Provider } from 'react-redux';
import store from 'state/store';
import 'styles/global.scss';
import Navbar from 'components/Navbar';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
