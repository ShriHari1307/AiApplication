import './App.css'
import Header from './Components/Header'
import { HeroSection } from './Components/HeroSection/HereSection'
import { ClientSection } from './Components/ClientSection/ClientSection'
import { CodeSampleSection } from './Components/SampleCodeSection/CodeSampleSection'
import { Features } from './Components/Features/Features'
import { Statistics } from './Components/Statistics/Statistics'
import { Testimonials } from './Components/Testimonials/Testimonials'
import Pricing from './Components/Pricing/Pricing'

function App() {

  return (
    <>
    <Header/>

    {/* MAIN */}
    <HeroSection/>
    <ClientSection/>
    <CodeSampleSection/>
    <Features/>
    <Statistics/>
    <Testimonials/>
    <Pricing/>
    
    </>
  )
}

export default App
