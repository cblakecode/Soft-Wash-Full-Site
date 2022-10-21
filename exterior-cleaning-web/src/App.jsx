import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Home from "./pages/Home";
import Area from "./pages/Area";
import Payment from "./pages/Payment";
import Services from "./pages/Services";
import Account from "./pages/Account";


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
      background: {
        default: "#0d21a1"
      }
    },
  });

  return (
    <Container maxWidth="xl">
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area" element={<Area />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
    </Container>
  );
}

export default App;
