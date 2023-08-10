import React ,{useEffect, useState}from 'react'
import axios from '../axios'
import './Banner.css'
import{API_key} from '../../constants/constants'
import { imgUrl } from '../../constants/constants'

function Banner() {
 const [movies, setmovies] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setmovies(response.data.results[0]);
    })
  },[])
  
  return (
    <div style={{backgroundImage:`url(${movies ? imgUrl+ movies.backdrop_path:''})`}}
    className='banner'>
    <div className='content'>
        <h1 className='title'>{movies ? movies.title:""}</h1>
          <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
          </div>
          <h1 className='description'>{movies ? movies.overview:""}</h1>
      </div>
      
        <div className='fade'></div>
    </div>
  )
}

export default Banner