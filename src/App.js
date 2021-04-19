import './App.css';

import React, { useEffect, useRef } from 'react';

// import AboutSection from './components/AboutSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FormsSection from './components/FormsSection';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import { Section } from './components/SharedStyledComponents';
import { StateProvider } from './stores';

function App() {
  const services = useRef(null);
  const demandSupply = useRef(null);
  const resources = useRef(null);
  const aboutUs = useRef(null);
  const contactUs = useRef(null);
  const view = window.innerWidth > 480 ? 'web' : 'mobile';

  const refMap = {
    services,
    demandSupply,
    resources,
    aboutUs,
    contactUs,
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    // eslint-disable-next-line no-undef
    initmGIS(
      'qEUrKGC33pv2vzqi4b4AwbGsory2MY3Vnp0-eoWdlHpLUwIw40GoQxG8Tc67w-Ol_7JvT9O-hWvW1FQPoP06YQ==',
      'Uqyx9pm1bhpwRTQZFW6yECM31VNHmP9PgspOagPHtMnh0Wo-HUoL2tDy186wDQKCrMrg-6SgATkYAkd1IWRhhIfqB9RpKSLW',
      'INDIA',
      'mGIS-iframe'
    );
    return () => window.removeEventListener('resize', updateWindowDimensions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToRef = (refString) => {
    let offsetTop = 0;
    if (refString !== 'top') {
      const headerHeight = 64;
      const titleOffset = 32; // to adjust negative margin of title
      offsetTop = refMap[refString].current.offsetTop - ((headerHeight + titleOffset) * window.innerWidth) / 1440;
    }
    window.scrollTo(0, offsetTop);
  };

  const updateWindowDimensions = () => {
    const newView = window.innerWidth > 480 ? 'web' : 'mobile';
    newView !== view && window.location.reload();
  };

  return (
    <StateProvider>
      <Header scrollTo={scrollToRef} mobileView={view === 'mobile'} />
      <div className={`${view}-container`}>
        <Section ref={demandSupply} marginTop="20px">
          <MapContainer mobileView={view === 'mobile'} />
        </Section>
        <iframe id="mGIS-iframe" title="mGIS"></iframe>
        <Section ref={services}>
          <FormsSection mobileView={view === 'mobile'} />
        </Section>
        {/* <Section ref={aboutUs}>
          <AboutSection mobileView={view === 'mobile'} />
        </Section> */}
        <Section ref={contactUs}>
          <ContactUs mobileView={view === 'mobile'} />
        </Section>
      </div>
      <Footer />
    </StateProvider>
  );
}

export default App;
