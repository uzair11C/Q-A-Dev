import React from 'react'
import { Container, Stack, List, ListItem, Card, CardContent, Divider,Typography } from '@mui/material'

const AllSurahDis = () => 
{
  return (
        <Container maxWidth='lg' sx={{padding:'20px',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <Stack justifyContent='center' alignItems='center'>
                <Card sx={{padding:'10px',mt:'30px',mb:'21px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <Typography variant='h2' component='h2' sx={{textAlign:'center'}}>
                            بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{width:'1040px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <List>
                            <ListItem>
                                <Typography variant='h6' component='p'>
                                    Item 1 ar
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='h6' component='p'>
                                    Item 1 ur
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='h6' component='p'>
                                    Item 1 en
                                </Typography>
                            </ListItem>
                            <Divider sx={{mb:'10px',mt:'10px'}} />
                            <ListItem>
                                <Typography variant='h6' component='p'>
                                    Item 2 ar
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='h6' component='p'>
                                    Item 2 ur
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='h6' component='p'>
                                    Item 2 en
                                </Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
  )
}

export default AllSurahDis