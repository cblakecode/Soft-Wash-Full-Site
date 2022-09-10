import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { handleCloseQuote } from "../../store/slices/quoteSlice";
import ClientInfo from "./quote/ClientInfo";

const QuoteModal = () => {
  const { isOpen } = useSelector((store) => store.quote);
  const { clientInfo } = useSelector((store) => store.quote);
  const dispatch = useDispatch();

  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={() => dispatch(handleCloseQuote())}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {clientInfo && <ClientInfo />}
      </Modal>
    </Box>
  );
};

export default QuoteModal;
