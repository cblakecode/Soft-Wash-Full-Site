import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { handleClose } from "../../../store/slices/modalSlice";
import { logOut } from "../../../store/slices/authSlice";
import { useDeleteMemberMutation } from "../../../store/api/memberApiSlice";

const Delete = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [deleteMember] = useDeleteMemberMutation();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await deleteMember(user).unwrap();
      dispatch(logOut());
      dispatch(handleClose());
      navigate("/");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12}>
        <Typography color="error" variant="h4" textAlign="center">
          Are You Sure?!
        </Typography>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Typography color="inherit" variant="h6" textAlign="center">
          All Information will be lost
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={() => dispatch(handleClose())}
        >
          No
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={handleSubmit}
        >
          Yes
        </Button>
      </Grid>
    </Grid>
  );
};

export default Delete;
