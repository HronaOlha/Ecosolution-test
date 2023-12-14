import { useState, useEffect } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Values from './Values/Values';
import Electricity from './Electricity/Electricity';
import Cases from './Cases/Cases';
import Faq from './Faq/Faq';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

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

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
