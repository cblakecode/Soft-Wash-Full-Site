import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import ContactModal from "../features/modals/ContactModal";
import QuoteModal from "../features/modals/QuoteModal";
import MembersModal from "../features/modals/MembersModal";

const Home = () => {
  return (
  <Box>
    <Hero />
    <Services />
    <About />
    <Footer />
    <ContactModal />
    <QuoteModal />
    <MembersModal />
  </Box>
  )
}

export default Home