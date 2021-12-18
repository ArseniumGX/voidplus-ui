import './styles/global.scss'
import { Router } from './Router'
import { Header, Footer } from './components'

function App() {
   return (
      <div className="App">
         <Header />
         <Router />
         <Footer />
      </div>
   )
}

export default App
