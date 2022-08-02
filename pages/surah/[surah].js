import React from 'react'
import { Container, Stack, List, ListItem, Card, CardContent, Divider,Typography } from '@mui/material'
import Appbar from '../../components/Appbar'

const InSurah = ({ arSurah }) => {
    
    // console.log(arSurah.data.ayahs)

    const arAyahs = arSurah.data.ayahs

    // const urAyahs = urSurah.data.ayahs

    console.log(arAyahs&&arAyahs.map((ayah)=>{ayah}))

    return (
        <>
        <Appbar />
        <Container maxWidth='lg' sx={{padding:'20px',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <Stack justifyContent='center' alignItems='center'>
                <Card sx={{padding:'10px',mt:'30px',mb:'21px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <Typography variant='h2' component='h2' sx={{textAlign:'center'}}>
                            بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{padding:'10px',mt:'10px',mb:'11px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <Typography variant='h4' component='h3' sx={{textAlign:'center'}}>
                            Surah {arSurah.data.englishName}
                        </Typography>
                        <Typography variant='h3' component='h3' sx={{textAlign:'center',mt:'5px'}}>
                            {arSurah.data.name}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{width:'1300px', backgroundColor:'#f0f1f2'}}>
                    <CardContent>
                        <List>
                            <>
                                <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                                    {/* {urAyahs && urAyahs.map((urdu) => {
                                    <ListItem>
                                        <Typography variant='h6' component='p'>
                                            {urdu.text}
                                        </Typography>
                                    </ListItem>
                                    })} */}
                                    {arAyahs && arAyahs.map((arabi) => {
                                    <ListItem>
                                        <Typography variant='h6' component='p'>
                                            {arabi}
                                        </Typography>
                                    </ListItem>
                                    })}
                                    {/* <ListItem>
                                        <Typography variant='h6' component='p'>
                                            Item 1 en
                                        </Typography>
                                    </ListItem> */}
                                </Stack>
                                <Divider sx={{mb:'10px',mt:'10px'}} />
                            </>
                        </List>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    </>
  )
}

export default InSurah


export const getStaticProps = async (context) =>
{
    const res1 = await fetch(`http://api.alquran.cloud/v1/surah/${context.params.surah}/ar.junagarhi`)
    const arSurah = await res1.json()

    // const res2 = await fetch(`http://api.alquran.cloud/v1/surah/${context.params.surah}/ur.junagarhi`)
    // const urSurah = await res2.json()

    // const res3 = await fetch(`http://api.alquran.cloud/v1/surah/${context.params.surah}/en.junagarhi`)
    // const enSurah = await res3.json()

    return{
        props:{
            arSurah
        }
    }
}

export const getStaticPaths = async () => 
{
    const res = await fetch('http://api.alquran.cloud/v1/meta')
    
    const metaPath = await res.json()

    const paths = metaPath.data.surahs.references.map((data)=>
    {
        return{
            params: {
                surah: data.number.toString()
            }
        }
    })

    //const paths = ids.map((id) => {params: {surah: id.toString()}})

    return{
        paths,
        fallback: false
    }

}
