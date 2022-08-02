import React from 'react'
import { Container, Stack, List, ListItem, ListItemButton, Card, CardContent, Divider,Typography } from '@mui/material'
import Link from 'next/link'

const AllAhadisDis = ({ books }) => 
{
    const Books= books.Books

    console.log(Books?.map((book)=>book))

  return (
        <Container maxWidth='lg' sx={{padding:'20px',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <Stack justifyContent='center' alignItems='center'>
                <Card sx={{padding:'10px',mt:'30px',mb:'21px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <Typography variant='h4' component='h3' sx={{textAlign:'center'}}>
                            Ahadis e Nabawi (saww)
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{width:'900px', backgroundColor:'#f0f1f2',padding:'5px'}}>
                    <CardContent>
                        <List>
                            {Books?.map((book)=>(
                            <div key={book.Book_ID}>
                                <ListItem>
                                    <Link href={`/book/${book.Book_ID}`}>
                                        <ListItemButton>
                                            <Typography variant='h5' component='p' sx={{mr:'51px'}}>
                                                {book.Book_Name}
                                            </Typography>
                                            {/* <Typography variant='h5' component='p' >
                                                books
                                            </Typography> */}
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

export default AllAhadisDis