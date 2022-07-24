import React from 'react'
import { Container, Stack, List, ListItem, ListItemButton, Card, CardContent, Divider,Typography } from '@mui/material'

const AllSurahDis = () => 
{
  return (
        <Container maxWidth='lg' sx={{padding:'20px',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <Stack justifyContent='center' alignItems='center'>
                <Card sx={{padding:'10px',mt:'30px',mb:'21px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <Typography variant='h3' component='h2' sx={{textAlign:'center'}}>
                            The Holy Quran
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{width:'600px', backgroundColor:'#f0f1f2',padding:'5px'}}>
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <Typography>
                                        FGHGFGUGUGUHGH
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemButton>
                                    <Typography>
                                        FGHGFGUGUGUHGH
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
  )
}

export default AllSurahDis