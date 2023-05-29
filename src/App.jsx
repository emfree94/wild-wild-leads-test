import Header from './components/Header'
import AnimatedCursor from 'react-animated-cursor'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {lazy, Suspense, useEffect, useState} from 'react'
// import Loader from './components/Loader'

const LazyLoader = lazy(() => import('./components/Loader'));


function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.onload = () => {
      setTimeout(() =>{
        setIsLoading(false);
      }, 1000)
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense fallback={<LazyLoader />}>
      {isLoading ? <LazyLoader /> :
        <div className="App">
          <Header />
          <AnimatedCursor
            innerSize={30}
            outerSize={8}
            color='235, 56, 70'
            innerScale={0}
            innerStyle={{
              background: 'rgba(235, 56, 70)',
              color: 'transparent'
            }}
            outerStyle={{
              background: 'rgba(235, 56, 70, 0.29)',
              border: '2px solid rgb(235, 56, 70)',
            }}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
          />
        </div>
      }
    </Suspense>
  );
}

export default App;
