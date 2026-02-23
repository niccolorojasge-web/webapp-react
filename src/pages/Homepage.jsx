//importa componente per li stato 
import MovieCard from "../components/MovieCard"

function Homepage() {

  return (
    <>
    <h1 className="text-primary"> Bool Movie</h1>
    <h2><i>The boolean nerd Movies comunity</i></h2>

    <div className="row row-cols-3 mt-d">
       <MovieCard/>  
       <MovieCard/>  
       <MovieCard/>
       <MovieCard/>  
       <MovieCard/>       
    </div>
      
    </>
  )
}

export default Homepage
