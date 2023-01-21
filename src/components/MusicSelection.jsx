import React from 'react'
import {Card, CardMedia, Typography, Box, Stack, IconButton} from '@mui/material'
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import GenreSelection from './GenreSelection';

const MusicSelection = () => {
  const paused = true

  return (
    <Card
    variant="outlined"
    sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      backgroundColor:'#000000',
=======
>>>>>>> cc72757 (added components)
=======
      backgroundColor:'#374151',
>>>>>>> e3353c7 (changed background color for music selection)
=======
      backgroundColor:'#000000',
>>>>>>> 6bb11d8 (updated button color)
      p: 1,
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
    }}
  >
    <CardMedia
      component="img"
      width="124"
      height="124"
      alt="Beside Myself album cover"
      src="/static/images/cards/basement-beside-myself.jpeg"
      sx={{
        borderRadius: 0.5,
        width: 'clamp(124px, (304px - 100%) * 999 , 100%)',
      }}
    />
    <Box sx={{ alignSelf: 'center', px: { xs: 0, sm: 2 } }}>
      <GenreSelection sx={{ alignSelf:'center', position:'Top'}}/>
      <Typography
        variant="body1"
<<<<<<< HEAD
<<<<<<< HEAD
        color="#ffffff"
=======
        color="text.primary"
>>>>>>> cc72757 (added components)
=======
        color="#ffffff"
>>>>>>> 6bb11d8 (updated button color)
        fontWeight={600}
        sx={{
          textAlign: { xs: 'center', sm: 'start' },
          mt: { xs: 1.5, sm: 0 },
        }}
      >
        Ultraviolet
      </Typography>
      <Typography
        component="div"
        variant="caption"
<<<<<<< HEAD
<<<<<<< HEAD
        color="#ffffff"
=======
        color="text.secondary"
>>>>>>> cc72757 (added components)
=======
        color="#ffffff"
>>>>>>> 6bb11d8 (updated button color)
        fontWeight={500}
        sx={{ textAlign: { xm: 'center', sm: 'start' } }}
      >
        Basement • Beside Myself
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: 2,
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
        }}
      >
<<<<<<< HEAD
<<<<<<< HEAD
        <IconButton aria-label="fast rewind" sx={{color:'#ffe600'}}>
=======
        <IconButton aria-label="fast rewind" disabled>
>>>>>>> cc72757 (added components)
=======
        <IconButton aria-label="fast rewind" sx={{color:'#ffe600'}}>
>>>>>>> 6bb11d8 (updated button color)
          <FastRewindRounded />
        </IconButton>
        <IconButton
          aria-label={paused ? 'play' : 'pause'}
<<<<<<< HEAD
<<<<<<< HEAD
          sx={{ mx: 1, color:'#ffe600' }}
=======
          sx={{ mx: 1 }}
>>>>>>> cc72757 (added components)
=======
          sx={{ mx: 1, color:'#ffe600' }}
>>>>>>> 6bb11d8 (updated button color)
          onClick={() => setPaused((val) => !val)}
        >
          {paused ? <PlayArrowRounded /> : <PauseRounded />}
        </IconButton>
<<<<<<< HEAD
<<<<<<< HEAD
        <IconButton aria-label="fast forward" sx={{color:'#ffe600'}} >
=======
        <IconButton aria-label="fast forward" disabled>
>>>>>>> cc72757 (added components)
=======
        <IconButton aria-label="fast forward" sx={{color:'#ffe600'}} >
>>>>>>> 6bb11d8 (updated button color)
          <FastForwardRounded />
        </IconButton>
      </Stack>
    </Box>
  </Card>
  )
}

export default MusicSelection