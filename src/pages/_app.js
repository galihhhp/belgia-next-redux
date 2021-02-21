import { Provider } from 'react-redux';
import { Navbar } from 'components';
import store from 'state/store';
import 'styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </Provider>
  );
};

export default App;
