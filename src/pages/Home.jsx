import e from "cors"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import AboutMe from "../components/AboutMe"
import ContactForm from "../components/ContactForm"
import Services from "../components/MyServices"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <NavBar/>
      <HeroSection />
      <AboutMe />
      <ContactForm/>
      <Services/>
      <Footer/>
    </div>
  )
}
export default Home