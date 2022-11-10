import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Home from "./pages/Home";
const Area = lazy(() => import("./pages/Area"));
const Payment = lazy(() => import("./pages/Payment"));
const Services = lazy(() => import("./pages/Services"));
const Account = lazy(() => import("./pages/Account"));

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
        default: "#0d21a1",
      },
    },
  });

  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area" element={<Area />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Container>
  );
}

export default App;
