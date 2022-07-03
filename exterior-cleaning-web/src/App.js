import HeaderNavBar from "./components/Layout/HeaderNavBar";
import Container from "@mui/material/Container";
import Callbutton from "./components/UI/Callbutton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <Container maxWidth="xl">
      <HeaderNavBar />
      <Stack direction="row" space={4}>
        <Typography variant="h1">Hello World</Typography>
        <Callbutton title="Click Me!" />
      </Stack>
    </Container>
  );
}

export default App;
