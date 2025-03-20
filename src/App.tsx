import './App.css'
import MainContent from './MainContent'
import HeaderComponent from './Components/Header'

function App() {

  return (
    <>
    {/* Header */}
    <HeaderComponent/>
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
