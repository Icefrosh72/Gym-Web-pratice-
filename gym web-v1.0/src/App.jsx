import './App.css';
import Hero from './component/Hero/hero';
import Plans from './component/Plans/Plans';
import Programs from './component/Programs/programs';
import Reasons from './component/Reason/Reasons';
function App() {
  return(
    <div className='App'>
    <Hero />
    <Programs />
    <Reasons />
    <Plans />
  </div>
  )
}


export default App;