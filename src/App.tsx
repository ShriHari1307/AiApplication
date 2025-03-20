import './App.css'
import MainContent from './MainContent'
import Header from './Components/Header'
import PricingLayout from './Components/Pricing/PricingLayout'

function App() {

  return (
    <>
    {/* Header */}
    <Header/>

    {/* Main Content */}
    <MainContent/>

    {/* Pricing Section */}
    <div className=' flex mx-auto max-w-4xl border border-gray-600 pt-2'>
      <PricingLayout/>
    </div>
    
    {/* Footer */}
    </>
  )
}

export default App
