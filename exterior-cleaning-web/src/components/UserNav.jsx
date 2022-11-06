import MemberAvatar from "./MemberAvatar";
import SignUpButton from "./SignUpButton";
import Box from "@mui/material/Box";

const UserNav = () => {
  const loggedIn = JSON.parse(sessionStorage.getItem("userStorage"));

  return (
    <Box>{loggedIn?.isLoggedIn ? <MemberAvatar /> : <SignUpButton />}</Box>
  );
};

export default UserNav;
