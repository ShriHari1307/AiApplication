import './App.css'
import Header from './Components/Header'
import { HeroSection } from './Components/HeroSection/HereSection'
import { ClientSection } from './Components/ClientSection/ClientSection'
import { CodeSampleSection } from './Components/SampleCodeSection/CodeSampleSection'

function App() {

  return (
    <>
    <Header/>

    {/* MAIN */}
    <HeroSection/>
    <ClientSection/>
    <CodeSampleSection/>
    
    </>
  )
}

export default App
