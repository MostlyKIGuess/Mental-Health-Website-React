import React from 'react'
import IIIT_logo from '../images/IIIT_logo.png'
import { Button, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function Navbar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState((prev) => !prev);
  };

  const list = () => (
    <Box
      sx={{ width: 250 , marginTop: '64px'}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px 20px'}}>
            {/*Add image with max width*/}
            <img src={IIIT_logo} width={'124px' } style={{margin : '20px'}} />
            <div onClick={toggleDrawer(true)} style={{display: 'flex', gap: '5px', alignItems: 'center', color: 'white'}}>
                <Typography>MENU</Typography>
                <IconButton >
                    <MenuIcon style={{color: 'white'}} />
                </IconButton>
            </div>
            <Drawer
            anchor={'right'}
              open={state}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
        </div>
    </div>
  )
}

export default Navbar