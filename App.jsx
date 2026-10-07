import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Footer from "./components/footer"

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar/>
     <Hero />
    <Footer />
    </div>
  )
}

export default App