import React from 'react'
import { Container, Stack, List, ListItem, ListItemButton, Card, CardContent, Divider,Typography } from '@mui/material'
import Appbar from '../../components/Appbar'

const Inbook = ({ enHadis }) => {
    
    const chapters = enHadis.Chapter

    return (
        <>
        <Appbar />
        <Container maxWidth='lg' sx={{padding:'20px',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <Stack justifyContent='center' alignItems='center'>
                <Card sx={{padding:'10px',mt:'10px',mb:'11px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <Typography variant='h4' component='h3' sx={{textAlign:'center'}}>
                            Chapters in the Books
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{width:'1040px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <List>
                            {chapters?.map((chapter) => (
                            <div key={chapter.Chapter_ID}>
                                <ListItem>
                                    <ListItemButton>
                                        <Typography variant='h6' component='p'>
                                            {chapter.Chapter_Name}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                                {/* <ListItem>
                                    <Typography variant='h6' component='p'>
                                        Item 1 en
                                    </Typography>
                                </ListItem> */}
                                <Divider sx={{mb:'10px',mt:'10px'}} />
                            </div>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    </>
  )
}

export default Inbook


export const getStaticProps = async (context) =>
{
    const res1 = await fetch(`https://ahadith-api.herokuapp.com/api/chapter/${context.params.book}/en`)
    const enHadis = await res1.json()

    // const res2 = await fetch(`http://api.alquran.cloud/v1/surah/${context.params.surah}/ur.junagarhi`)
    // const urSurah = await res2.json()

    return{
        props:{
            enHadis
        }
    }
}

export const getStaticPaths = async () => 
{
    const res = await fetch('https://ahadith-api.herokuapp.com/api/books/en')
    
    const hadisPath = await res.json()

    const paths = hadisPath.Books.map((book)=>
    {
        return{
            params: {
                book: book.Book_ID.toString()
            }
        }
    })

    return{
        paths,
        fallback: false
    }

}
