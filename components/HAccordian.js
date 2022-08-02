import React from 'react'
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Button, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'

const HAccordian = () => 
{
  return (
    <>
        <Container maxWidth='md' className='sel-con' sx={{flexDirection:'column',padding:'20px'}}>
            <Grid container alignItems='stretch'>
                <Grid item xs={12} md={12} lg={12}>
                    <Accordion className='acc' sx={{backgroundColor:'primary.main',color:'white'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography variant='h5' component='p'>
                                All Ahadis
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                            <Stack direction='column' spacing={3} justifyContent="center" alignItems='center'>
                                <Typography className='acc-dets' variant='p' component='div'>
                                    Get all the available Ahadis in Arabic and English translation
                                </Typography>
                                <Button variant='contained' color='secondary'>
                                    <Link href='/all-ahadis'>
                                        Get All &nbsp;Ahadis
                                    </Link>
                                </Button>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                    {/* <Accordion className='acc' sx={{backgroundColor:'primary.main',color:'white'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                            aria-controls="panel3a-content"
                            id="panel3a-header">
                            <Typography variant='h5' component='p'>
                                Specific Book(Baab)
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                            <Stack direction='column' spacing={3} justifyContent="center" alignItems='center'>
                                <Typography className='acc-dets' variant='p' component='div'>
                                    Get a specific Book(Baab) of a Hadis
                                </Typography>
                                <Button variant='contained' color='secondary'>
                                    Get Book
                                </Button>
                            </Stack>
                        </AccordionDetails>
                    </Accordion> */}

                    <Accordion className='acc' sx={{backgroundColor:'primary.main',color:'white'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                            aria-controls="panel3a-content"
                            id="panel3a-header">
                            <Typography variant='h5' component='p'>
                                Search Keyword
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                            <Stack direction='column' spacing={3} justifyContent="center" alignItems='center'>
                                <Typography className='acc-dets' variant='p' component='div'>
                                    Search all the available Ahadis for anything using a keyword
                                </Typography>
                                <Button variant='contained' color='secondary'>
                                    Get Search Result
                                </Button>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>  
    </>
  )
}

export default HAccordian
