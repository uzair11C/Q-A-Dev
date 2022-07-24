import React from 'react'
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Button, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'

const QAccordian = () => 
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
                                Full Quran
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                            <Stack direction='column' spacing={3} justifyContent="center" alignItems='center'>
                                <Typography className='acc-dets' variant='p' component='div'>
                                    Get the full Quran in Urdu and English Translation by Muhammad Ibne Ibrahim Junagarhi
                                </Typography>
                                <Button variant='contained' color='secondary'>
                                    <Link href='/full-quran'>
                                        Get Whole Quran
                                    </Link>
                                </Button>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='acc' sx={{backgroundColor:'primary.main',color:'white'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                            aria-controls="panel3a-content"
                            id="panel3a-header">
                            <Typography variant='h5' component='p'>
                                Specific Surah
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                            <Stack direction='column' spacing={3} justifyContent="center" alignItems='center'>
                                <Typography className='acc-dets' variant='p' component='div'>
                                    Get a specific surah by name
                                </Typography>
                                <Button variant='contained' color='secondary'>
                                    Get Surah
                                </Button>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

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
                                    Search the whole Quran for anything using a keyword
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

export default QAccordian
