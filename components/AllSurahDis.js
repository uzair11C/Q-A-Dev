import React from 'react'
import { Container, Stack, List, ListItem, ListItemButton, Card, CardContent, Divider,Typography } from '@mui/material'
import Link from 'next/link'

const AllSurahDis = ({ smeta }) => 
{
    const surdata = smeta.data.surahs.references
    //console.log(smeta.data.surahs.references)
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
                            {surdata.map(surah=>(
                            <div key={surah.number}>
                                <ListItem>
                                    <Link href={`/surah/${surah.number}`}>
                                        <ListItemButton>
                                            <Typography variant='h5' component='p' sx={{mr:'51px'}}>
                                                {surah.number})  {surah.englishName}
                                            </Typography>
                                            <Typography variant='h5' component='p' >
                                                {surah.name}
                                            </Typography>
                                            {/* <Typography variant='h5' component='p'>
                                                {surah.englishNameTranslation}
                                            </Typography> */}
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                                <Divider />
                            </div>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
  )
}

export default AllSurahDis