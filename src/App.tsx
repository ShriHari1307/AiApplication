import './App.css'
import Header from './Components/Header'
import { HeroSection } from './Components/HeroSection/HereSection'
import { ClientSection } from './Components/ClientSection/ClientSection'
import { CodeSampleSection } from './Components/SampleCodeSection/CodeSampleSection'
import { Features } from './Components/Features/Features'
import { Statistics } from './Components/Statistics/Statistics'
import { Testimonials } from './Components/Testimonials/Testimonials'
import Pricing from './Components/Pricing/Pricing'
import Blog from './Components/Blog/Blog'
import { Community } from './Components/Community/Community'
import { Getstart } from './Components/GetStart/Getstart'
import { Footer } from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <HeroSection/>
    <ClientSection/>
    <CodeSampleSection/>
    <Features/>
    <Statistics/>
    <Testimonials/>
    <Pricing/>
    <Community/>
    <Blog/>
    <Getstart/>
    <Footer/>
    </>
  )
}

export default App
