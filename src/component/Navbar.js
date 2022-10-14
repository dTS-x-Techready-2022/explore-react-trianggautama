import React from 'react'
import {useState} from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import Mail from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",
    marginBottom:'10px'
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "#f0eded",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled(Box)(({theme}) =>({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems:"center",
    gap:"10px",
    color:'black',
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

export const Navbar = () => {
   const [open, setOpen] = useState(false);
  return (
    <div>
        <AppBar position="static" sx={{backgroundColor:'#ffffff',borderWidth:'1px',borderColor:'lightgrey',marginBottom:'1px'}}>
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block",color:'#de1212',fontWeight:'bold'}}} >
                    Care for Hemophilia
                </Typography>
                <BloodtypeIcon sx={{display:{xs:"block",sm:"none",color:'red'}}}  />
                <Search>
                    <InputBase placeholder='search..'></InputBase>
                </Search> 
                <Icons>
                    <Badge badgeContent={4} color="warning">
                        <Mail  sx={{ color: 'red' }} />
                    </Badge>
                    <Badge badgeContent={2} color="warning">
                        <NotificationsActiveIcon sx={{ color: 'red' }} />
                    </Badge>
                    <Avatar sx={{width:30,height:30}} alt="Cindy Baker" src="/static/images/avatar/3.jpghttps://cdn.dribbble.com/users/112330/screenshots/15505990/media/a40608176e1c04daeeb247d61f7c4d5f.png?compress=1&resize=400x300" onClick={()=> setOpen(true) }/>
                </Icons>
                <UserBox>
                    <Avatar sx={{width:30,height:30}} alt="Cindy Baker" src="/static/images/avatar/3.jpghttps://cdn.dribbble.com/users/112330/screenshots/15505990/media/a40608176e1c04daeeb247d61f7c4d5f.png?compress=1&resize=400x300" />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem><Link to="/">Logout</Link></MenuItem>
            </Menu>
        </AppBar>
    </div>
  )
}
