import React from 'react'
import { Container, Grid, Box, Paper, Typography } from '@mui/material'

const Selection = () => {
  return (
        <Container className = 'sel-con' maxWidth="xl" >
            <Grid container
                    spacing={0} alignItems="stretch">
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className='sel-box1'  >
                    <Paper elevation={5} className='paper'>
                        <Typography variant='h4' component='p'>
                            Paper 1
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className='sel-box2'>
                    <Paper elevation={5} className='paper'>
                        <Typography variant='h4' component='p'>
                            Paper 3
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
  )
}

export default Selection