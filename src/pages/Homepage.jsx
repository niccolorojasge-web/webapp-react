//importa componente per li stato 
import MovieCard from "../components/MovieCard"
//importa axios 
import axios from "axios"
//importo state e effect
import {useState ,useEffect} from "react"
const endpoint = "http://localhost:3000/api/movie"
import { useGlobal } from "../contexts.jsx/LoadingMain"


function Homepage() {
  const { setIsLoading } = useGlobal();
const [movies, setMovies]= useState ([]);
//funzione che gestisce la chiamata axios 
const fetchMovies = ()=>{
   setIsLoading(true);
  axios.get(endpoint)
  .then (res=>{setMovies(res.data);})
  .catch (err=>{console.log(err)})
  .finally(setIsLoading(false))
}
//funzione di rendering li stato dei libri
const renderMovie=()=>{
  return movies.map (movie=>{
    return (
      <div className="col" key={movie.id}>
                    <MovieCard propsmovie  ={movie} />
                </div>
    )
  })

}
//richiamiamo funzione di fetch al montaggio della page
useEffect(fetchMovies,[]);
  return (
    <>
    <h1 className="text-primary"> Bool Movie</h1>
    <h2><i>The boolean nerd Movies comunity</i></h2>

    <div className="row row-cols-3 mt-d">
       {renderMovie()}         
    </div>
      
    </>
  )
}

export default Homepage
