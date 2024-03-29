import ContactModal from "../modals/ContactModal";
import QuoteModal from "../modals/QuoteModal";
import MembersModal from "../modals/MembersModal";
import Update from "../modals/Account/Update";
import Delete from "../modals/Account/Delete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import { handleClose } from "../../app/slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";

const modalPage = (page) => {
  switch (page) {
    case "contact":
      return <ContactModal />;
    case "quote":
      return <QuoteModal />;
    case "member":
      return <MembersModal />;
    case "update":
      return <Update />;
    case "delete":
      return <Delete />;
    default:
      return;
  }
};

const ModalPopup = () => {
  const { currentPage, isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(handleClose())}
        closeAfterTransition
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grow in={isOpen} mountOnEnter unmountOnExit>
          <Box
            sx={{
              backgroundColor: "common.white",
              width: "60%",
              height: "auto",
              borderRadius: "10px",
              p: "1rem",
            }}
          >
            {modalPage(currentPage)}
          </Box>
        </Grow>
      </Modal>
    </>
  );
};

export default ModalPopup;
