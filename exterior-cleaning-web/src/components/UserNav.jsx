import { useSelector } from "react-redux";
import MemberAvatar from "./MemberAvatar";
import SignUpButton from "./SignUpButton";
import Box from "@mui/material/Box";

const UserNav = () => {
  const { isLogged } = useSelector((store) => store.auth);

  return <Box>{isLogged ? <MemberAvatar /> : <SignUpButton />}</Box>;
};

export default UserNav;
