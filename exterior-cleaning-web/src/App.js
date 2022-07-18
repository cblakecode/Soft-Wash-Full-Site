import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";

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
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
