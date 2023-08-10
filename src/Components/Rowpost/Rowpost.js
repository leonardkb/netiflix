
import React, {useEffect,useState}from 'react'
import './Rowpost.css'
import axios from 'axios'
 import {imgUrl, API_key} from '../../constants/constants'
 import Youtube from 'react-youtube';
 
function Rowpost(props) {
  const [movies, setmovies] = useState([])
  const [urlid,seturlid] = useState('')
      useEffect(()=>{
        axios.get(props.url).then(response=>{
          console.log(response.data.results[0]);
          setmovies(response.data.results)
        }).catch(err=>{
          alert("network error")
        })
      },[])

      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handlemovies=(id)=>{
            console.log(id)
            axios.get(`movie/${id}/videos?api_key=${API_key}&language=en-US`).then(response=>{
              console.log(response.data)
              if(response.data.results.length!==0){
                      seturlid(response.data.results[0])
              }else{
                console.log('array empty')
              }
            })
      }
       
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
    {movies.map((obj)=>
      <img onClick={()=>{
        handlemovies(obj.id)
      }}className={props.isSmall ? 'smallposter':'poster' }alt='poster' src={`${imgUrl+obj.backdrop_path}`}/>
    )}
      </div>

    { urlid &&  <Youtube videoId={urlid.key} opts={opts}  />}


    </div>
  )
}

export default Rowpost
