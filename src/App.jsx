
import './App.css'
import Header from './Components/Header'
import HomeI from './Components/HomeI'
import About from './Components/About'
function App() {


  return (
    <>
      <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bx-chevron-up scrolltop__icon'></i>
        </a>

     <Header/>
     <HomeI/>
    <About/>
    </>
  )
}

export default App
