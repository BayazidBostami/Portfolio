import Banner from "./Components/Banner"
import Header from "./Components/Header"
import Portfolio from "./Components/Portfolio"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import Testimonial from "./Components/Testimonial"
import About from "./Components/UI/About"
import Skills from "./Components/UI/Skills"
import "slick-carousel/slick/slick.css";
import "./App.css";
import Contact from "./Components/Contact"
import Blogs from "./Components/Blogs"
import Footer from "./Components/Footer"
// import "slick-carousel/slick/slick-theme.css";




function App() {

  return (
    <main>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Blogs></Blogs>
      <Footer></Footer>

    </main>
  )
}

export default App
