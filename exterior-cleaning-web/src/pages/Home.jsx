import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import { resetScroll } from "../app/slices/scrollSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { target } = useSelector((store) => store.scroll);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (target === "services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
      dispatch(resetScroll());
    }
    if (target === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      dispatch(resetScroll());
    }
  }, [target, dispatch]);

  return (
    <Box>
      <Hero />
      <Services ref={servicesRef} />
      <About ref={aboutRef} />
      <Footer />
    </Box>
  );
};

export default Home;
