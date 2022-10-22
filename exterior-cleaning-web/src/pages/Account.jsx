import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Account = () => {
  const { persistedData } = useSelector((store) => store.loggedIn);
  const { memberData } = useSelector((store) => store.member);
  const name = persistedData.name || memberData.name;

  const stringAvatar = (name) => {
    const bigName = name?.toUpperCase();
    const arr = bigName.split(" ");

    return {
      children: `${arr[0][0]}${arr[1][0]}`,
    };
  };

  return (
    <Paper
      component={Grid}
      container
      direction="column"
      rowSpacing={3}
      elevation={4}
      sx={{ mt: "1rem", minHeight: "100vh" }}
    >
      <Grid item xs={12} justifyContent="center" display="flex">
        <Box
          sx={{
            width: "15vw",
            minHeight: "4rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            {...stringAvatar(name)}
            sx={{ width: "100%", py: "50%", fontSize: "8.5vw" }}
          />
        </Box>
      </Grid>
    </Paper>
  );
};

export default Account;
