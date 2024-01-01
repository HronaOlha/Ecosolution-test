import { useState, useEffect } from 'react';

import Header from './components/HeaderComponents/Header/Header';
import Main from './containers/Main/Main';
import Values from './containers/Values/Values';
import Electricity from './containers/Electricity/Electricity';
import Cases from './containers/Cases/Cases';
import Faq from './containers/Faq/Faq';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';

function App() {
  const [deviceType, setDeviceType] = useState('mobile');

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setDeviceType('mobile');
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header deviceType={deviceType} />
      <main>
        <Main />
        <Values deviceType={deviceType} />
        <Electricity />
        <Cases deviceType={deviceType} />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
