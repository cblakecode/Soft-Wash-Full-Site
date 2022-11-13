import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { handleClose } from "../../../store/slices/modalSlice";
import { logOut } from "../../../store/slices/authSlice";
import {
  useDeleteMemberMutation,
  useGetMemberQuery,
} from "../../../store/api/memberApiSlice";
import { snackError, snackSuccess } from "../../../store/slices/snackSlice";

const Delete = () => {
  const navigate = useNavigate();
  const { username } = useSelector((store) => store.auth.user);
  const { _id } = useGetMemberQuery(username, {
    selectFromResult: ({ data }) => ({
      _id: data?._id,
    }),
  });
  const dispatch = useDispatch();
  const [deleteMember] = useDeleteMemberMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reply = await deleteMember(_id).unwrap();
      dispatch(logOut());
      dispatch(handleClose());
      navigate("/");
      dispatch(snackSuccess(reply));
      return;
    } catch (error) {
      if (error.status !== 403) {
        dispatch(snackError(error.data.message));
      }
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
