import React from "react";
import ContactModal from "../modals/ContactModal";
import QuoteModal from "../modals/QuoteModal";
import MembersModal from "../modals/MembersModal";
import Update from "../modals/Account/Update";
import Delete from "../modals/Account/Delete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { handleClose } from "../../store/slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";

const modalPage = (page) => {
  switch (page) {
    case "contact":
      console.log(page);
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
          {modalPage(currentPage)}
        </Box>
      </Modal>
    </>
  );
};

export default ModalPopup;
