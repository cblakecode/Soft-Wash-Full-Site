import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountOptions from "../features/modals/AccountOptions";
import { handleOpen } from "../app/slices/modalSlice";
import { useGetMemberQuery } from "../app/api/memberApiSlice";

const textStyles = {
  fontSize: "3rem",
  color: "#fff",
};

const labelStyles = {
  fontSize: "3rem",
  color: "#eec643",
  textAlign: { xs: "center", lg: "left" },
};

const AccountInfo = () => {
  const { username } = useSelector((store) => store.auth.user);
  const { currentData: user } = useGetMemberQuery(username);
  const dispatch = useDispatch();

  const name = user?.name || "John Doe";

  let numRegex = user?.phone.replace(/(\d{3})(\d{3})(\d+)/, "($1) $2-$3");

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
      elevation={4}
      sx={{
        mt: "1rem",
        px: "1rem",
        pb: "1rem",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <AccountOptions />
      <Grid item xs={12} justifyContent="center" display="flex" my="2rem">
        <Tooltip title={name}>
          <Box
            sx={{
              width: "15vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              {...stringAvatar(name)}
              alt="John Doe"
              sx={{ width: "100%", py: "50%", fontSize: "7vw" }}
            />
          </Box>
        </Tooltip>
      </Grid>
      <Grid item container bgcolor="#0d21a1" p="1rem" rowSpacing={3}>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" color="initial" sx={labelStyles}>
            Username:
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography
            variant="body1"
            color="initial"
            textAlign="center"
            sx={textStyles}
          >
            {user?.username}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" sx={labelStyles}>
            Name:
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography sx={textStyles} textAlign="center">
            {user?.name}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography sx={labelStyles}>Email:</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography
            sx={{ ...textStyles, fontSize: { xs: "5vw", md: "3rem" } }}
            textAlign="center"
          >
            {user?.email}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography sx={labelStyles}>Phone:</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography sx={textStyles} textAlign="center">
            {numRegex}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography sx={labelStyles}>Address:</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography sx={textStyles} textAlign="center">
            {user?.address}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container px="1rem" mt="1rem" columnSpacing={4}>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => dispatch(handleOpen("update"))}
          >
            Edit
          </Button>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={() => dispatch(handleOpen("delete"))}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AccountInfo;
