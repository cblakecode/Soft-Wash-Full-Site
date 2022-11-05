import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Update from "./Account/Update";
import Delete from "./Account/Delete";
import Upgrade from "./Account/Upgrade";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsClosed } from "../../store/slices/memberSlice";

const accountPage = (page) => {
  switch (page) {
    case "update":
      return <Update />;
    case "delete":
      return <Delete />;
    case "upgrade":
      return <Upgrade />;
    default:
      return;
  }
};

const AccountOptions = () => {
  const { accountOpen } = useSelector((store) => store.member);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={Boolean(accountOpen)}
        onClose={() => dispatch(toggleIsClosed())}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "common.white",
            width: "60%",
            height: "auto",
            borderRadius: "10px",
            p: "1rem",
          }}
        >
          {accountPage(accountOpen)}
        </Box>
      </Modal>
    </>
  );
};

export default AccountOptions;
