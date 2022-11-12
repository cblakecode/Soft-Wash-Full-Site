import AccountInfo from "../components/AccountInfo";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Account = () => {
  const { isLogged } = useSelector((store) => store.auth);

  return <Box>{isLogged && <AccountInfo />};</Box>;
};

export default Account;
