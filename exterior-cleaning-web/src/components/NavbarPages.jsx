import { useState, Fragment } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import {Link} from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


const pages = ["payment", "services", "area"];


const NavbarPages = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

  

  return (
    <Fragment>
      <Box
      sx={{ display: {xs: "none", md: "flex"}, flexGrow: 2, justifyContent: "center" }}
        >
      {pages.map((pageLg) => (
            <Button component={Link} to={`/${pageLg}`} key={pageLg}
              sx={{ my: 2, color: "common.white", display: "block", textDecoration: "none" }}
            >
              {pageLg}
            </Button>
      ))}
        </Box>
        <Box sx={{ display: {xs: "flex", md: "none"}, justifyContent: "flex-start", alignItems: "center", gridRow: "1" }}>
      <IconButton aria-label="pages" aria-controls="pages" onClick={handleOpen}>
          {Boolean(anchorEl) ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
      <Menu id="pages" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} sx={{mr: "1rem", mt: "2rem"}} anchorOrigin={{vertical: "bottom", horizontal: "right"}} transformOrigin={{vertical: "bottom", horizontal: "right"}}>
        {pages.map((pageSm) => (
          <MenuItem key={pageSm}>
              <ListItemButton component={Link} to={`/${pageSm}`}>
                  <ListItemText>{pageSm}</ListItemText>
              </ListItemButton>
          </MenuItem>
        ))}
      </Menu>
        </Box>
    </Fragment>
  
  )
}

export default NavbarPages