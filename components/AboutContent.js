import React from 'react'
import { Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import me from '../images/meHalf.jpg';

const AboutContent = () => 
{
  return (
    <Stack direction="column" spacing={2} sx={{padding:'25px'}}>
        <Typography variant ='h4' component='div' sx=
        {
            {
                fontWeight:'700'
            }
        }>
            About The Website Author:
        </Typography>
        <Stack direction='row' spacing={5}>
            <div>
                <Avatar alt="Uzair" src={me} sx={{width:'100px',height:'100px'}} />
                <Typography variant='p' component='div' sx={{marginTop:'15px', alignItems:'center'}}>
                    Uzair Abdullah
                </Typography>
            </div>
            <Typography variant='h6' component='div'>
                I am student of Military College of Signals, a campus of NUST, studying
                software engineering and pursuing a career in web development 
            </Typography>
        </Stack>
        <Typography variant ='h4' component='div' sx=
        {
            {
                fontWeight:'700'
            }
        }>
            Credits for the APIs:
        </Typography>
    </Stack>
  )
}

export default AboutContent