import { Provider } from 'react-redux';
import store from 'state/store';
import 'styles/global.scss';
import { Navbar } from 'components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
