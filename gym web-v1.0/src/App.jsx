import './App.css';
import Hero from './component/Hero/hero';
import Plans from './component/Plans/Plans';
import Programs from './component/Programs/programs';
import Reasons from './component/Reason/Reasons';
import Testimonial from './component/Testimonial/Testimonial';
import Join from './component/Join/join';
import Footer from './component/Footer/Footer';
function App() {
  return(
    <div className='App'>
    <Hero />
    <Programs />
    <Reasons />
    <Plans />
    <Testimonial />
    <Join />
    <Footer />
  </div>
  )
}


export default App;