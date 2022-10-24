import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Services />
      <About />
      <Footer />
    </Box>
  );
};

export default Home;
