import React from 'react'
import { Container, Grid, Box, Paper, Typography } from '@mui/material'
import Link from 'next/link'

const Selection = () => {
  return (
        <Container className = 'sel-con' maxWidth="xl" >
            <Grid container
                    spacing={0} alignItems="stretch">
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className='sel-box1'  >
                    <Link href='/quran'>
                        <a>
                            <Paper elevation={5} className='paper'>
                                <Typography variant='h4' component='p'>
                                    Paper 1
                                </Typography>
                            </Paper>
                        </a>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className='sel-box2'>
                    <Link href='/ahadis'>
                        <a>
                            <Paper elevation={5} className='paper'>
                                <Typography variant='h4' component='p'>
                                    Paper 2
                                </Typography>
                            </Paper>
                        </a>
                    </Link>
                </Grid>
            </Grid>
        </Container>
  )
}

export default Selection