import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TrackOne from '../assets/music/Alex-Productions - Electro cyberpunk _ Fight.mp3';
import TrackTwo from '../assets/music/Alex-Productions - Electro Trap _ Bang.mp3';

import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: '#fff',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const clickMachine = createMachine({
  id: "GenreSelection",
  initial: "track",
  states: {
    track: {
      on: {
        "Click Track1": {
          target: "Track 1",
        },
        "click Track2": {
          target: "Track 2",
        },
      },
    },
    "Track 1": {},
    "Track 2": {},
  },
  context: {},
  predictableActionArguments: true,
  preserveActionOrder: true,
});


export default function GenreSelection() {
  const [state, send] = useMachine(clickMachine);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [track, setTrack] = React.useState('');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTrack = (value) => {
    setTrack(value);
    handleClose()
    console.log(track)
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Select Genre
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        track ={track}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => send('Track 1')} value='track 1' disableRipple>
          <EditIcon />
          Track 1
        </MenuItem>
        <MenuItem onClick={handleTrack} value='track 2' disableRipple>
          <FileCopyIcon />
          Track 2
        </MenuItem>
      </StyledMenu>
    </div>
  );
}