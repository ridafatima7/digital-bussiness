import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import BrandingVideo from './Components/BrandingVideo';
import WhatWeDo from './Components/WhatWeDo';
import OurDiff from './Components/OurDiff';
import {motion,useAnimation} from 'framer-motion';
import HowItsWorks from './Components/HowItsWorks';
function App() {
  const controls=useAnimation()
  return (
    <motion.div className="App" animate={controls}>
     <Navbar />
     <Hero />
     <BrandingVideo />
     <WhatWeDo />
     <motion.div
     onViewportEnter={()=>
      controls.start({
        backgroundColor:'var(--secondary-color)',
      })
     }
     onViewportLeave={()=>
     controls.start({
      backgroundColor:'white',
     })
    }
    viewport={{amount:0.4}}
     >
     <OurDiff />
     </motion.div>
     <HowItsWorks />
    </motion.div>
  );
}

export default App;
