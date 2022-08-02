import React , {useEffect} from 'react'
import AllAhadisDis from '../components/AllAhadisDis'
import Appbar from '../components/Appbar'

const AllAhadis = ({ books }) => 
{
  return (
    <>
        <Appbar />
        <AllAhadisDis books={books} />
    </>
  )
}

export default AllAhadis

export const getStaticProps = async () => 
{   
    const res = await fetch('https://ahadith-api.herokuapp.com/api/books/en')
    const books = await res.json()

    return{
        props:{
            books
        }
    }
}
