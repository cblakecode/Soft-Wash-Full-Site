import HeaderNavBar from "./components/Layout/HeaderNavBar";
import Container from "@mui/material/Container";
import Body from "./components/Layout/Body/Body";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <HeaderNavBar />
      <Body />
    </Container>
  );
}

export default App;
