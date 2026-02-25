import { Link, redirect } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"
import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react"
//import review
import AddReview from '../components/AddReview'


const endpoint = "http://localhost:3000/api/movie/"
//function moviepage 
function MoviePage() {
const {id}= useParams();

//settiamo la var di stato  per il libro 
const [movie, setMovie]= useState({})

//funzione di render chiama rotta show
const fetchMovie=()=>{
    axios.get(endpoint + id)
    .then (res=>{setMovie(res.data)})
    .catch (err=>{
        console.log(err)
    })
}
//richiamo funzione di rendering 
useEffect(fetchMovie,[])
//funzione di rendering per il li stato dei libri 
const renderReviews =()=>{
    return movie.results?.map(result=>{
        return <ReviewCard reviewProp={result} key={result.id}/>
    })


}
  return (
    <>
     <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={movie.image} alt="titolo del libro" />
                </div>
                <h1>{movie.title}</h1>
                <h3 className="text-muted"><i>{movie.author}</i></h3>
                <p>{movie.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                  {renderReviews()}
            </section>
            <section>
                <AddReview movie_id={movie.id} reloadReviews={fetchMovie}/>
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
      
    </>
  )
}

export default MoviePage