import React , {useEffect} from 'react'
import Appbar from '../components/Appbar'
import AllSurahDis from '../components/AllSurahDis'

const FullQuran = ({ smeta }) => 
{
  return (
    <>
        <Appbar />
        <AllSurahDis smeta={smeta} />
    </>
  )
}

export default FullQuran

export const getStaticProps = async () => 
{   
    const res = await fetch('http://api.alquran.cloud/v1/meta')
    const smeta = await res.json()

    return{
        props:{
            smeta
        }
    }
}
