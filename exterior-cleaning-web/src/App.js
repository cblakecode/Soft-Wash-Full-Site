import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      common: {
        white: "#eef0f2",
        black: "#141414",
      },
      primary: {
        main: "#0d21a1",
      },
      secondary: {
        main: "#eec643",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header />
        <Hero />
        <Services />
      </Box>
    </ThemeProvider>
  );
}

export default App;
